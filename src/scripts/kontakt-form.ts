export function setupKontaktForms() {
	const forms = document.querySelectorAll<HTMLFormElement>('[data-kontakt-form]');
	forms.forEach(setupForm);
}

function setupForm(form: HTMLFormElement) {
	const started = form.querySelector<HTMLInputElement>('[data-started]');
	if (started) started.value = String(Date.now());

	const status = form.querySelector<HTMLElement>('[data-status]');
	const submit = form.querySelector<HTMLButtonElement>('[data-submit]');
	const variant = form.dataset.variant ?? 'full';

	form.addEventListener('submit', async (event) => {
		event.preventDefault();
		clearErrors(form);
		hideStatus(status);

		const data = new FormData(form);
		const website = String(data.get('website') ?? '');
		if (website.trim()) {
			showStatus(status, 'success', 'Danke. Wir melden uns.');
			form.reset();
			return;
		}

		const name = String(data.get('name') ?? '').trim();
		const phone = String(data.get('phone') ?? '').trim();
		const email = String(data.get('email') ?? '').trim();
		const message = String(data.get('message') ?? '').trim();
		const consent = data.get('consent');
		const services = data.getAll('service').map(String);

		let invalid = false;
		if (name.length < 2) {
			setError(form, 'name', 'Bitte deinen Namen angeben.');
			invalid = true;
		}
		if (variant === 'compact' && phone.length < 6) {
			setError(form, 'phone', 'Bitte eine Telefonnummer angeben.');
			invalid = true;
		}
		if (variant === 'full') {
			if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
				setError(form, 'email', 'Bitte eine gültige E-Mail-Adresse angeben.');
				invalid = true;
			}
			if (!consent) {
				setError(form, 'consent', 'Bitte der Verarbeitung zustimmen, damit wir antworten dürfen.');
				invalid = true;
			}
		}
		if (invalid) {
			showStatus(status, 'error', 'Bitte die markierten Felder prüfen.');
			return;
		}

		const elapsed = Date.now() - Number(started?.value || Date.now());
		if (elapsed < 800) {
			showStatus(status, 'error', 'Das ging zu schnell. Bitte noch einmal senden.');
			return;
		}

		submit && (submit.disabled = true);
		showStatus(status, 'loading', 'Nachricht wird gesendet...');

		const payload: Record<string, string> = {
			name,
			phone,
			email,
			message,
			service: services.join(', '),
			subject: variant === 'compact' ? 'Rückruf 9to6.de' : 'Anfrage 9to6.de',
			from_name: name || '9to6 Website',
		};

		try {
			await sendForm(payload);
			showStatus(
				status,
				'success',
				variant === 'compact'
					? 'Danke. Wir rufen dich zurück.'
					: 'Danke. Deine Nachricht ist angekommen. Wir antworten in der Regel innerhalb eines Werktags.',
			);
			form.reset();
			if (started) started.value = String(Date.now());
		} catch (error) {
			const fallback =
				error instanceof Error && error.message === 'unconfigured'
					? 'Das Formular ist noch nicht angebunden. Schreib an info@9to6.de oder ruf unter 0175 404 5558 an.'
					: 'Senden hat nicht geklappt. Bitte später erneut versuchen oder direkt an info@9to6.de schreiben.';
			showStatus(status, 'error', fallback);
		} finally {
			submit && (submit.disabled = false);
		}
	});
}

async function sendForm(payload: Record<string, string>) {
	const key = import.meta.env.PUBLIC_WEB3FORMS_ACCESS_KEY as string | undefined;
	if (!key) {
		if (import.meta.env.DEV) {
			await new Promise((r) => setTimeout(r, 650));
			return;
		}
		throw new Error('unconfigured');
	}

	const body = {
		access_key: key,
		botcheck: '',
		...payload,
	};

	const response = await fetch('https://api.web3forms.com/submit', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
		body: JSON.stringify(body),
	});
	const json = (await response.json()) as { success?: boolean; message?: string };
	if (!response.ok || !json.success) {
		throw new Error(json.message || 'fail');
	}
}

function setError(form: HTMLFormElement, name: string, text: string) {
	const el = form.querySelector<HTMLElement>(`[data-error-for="${name}"]`);
	const field = form.querySelector<HTMLInputElement>(`[name="${name}"]`);
	if (el) {
		el.hidden = false;
		el.textContent = text;
	}
	if (field) field.setAttribute('aria-invalid', 'true');
}

function clearErrors(form: HTMLFormElement) {
	form.querySelectorAll<HTMLElement>('[data-error-for]').forEach((el) => {
		el.hidden = true;
		el.textContent = '';
	});
	form.querySelectorAll('[aria-invalid]').forEach((el) => el.removeAttribute('aria-invalid'));
}

function showStatus(el: HTMLElement | null, kind: 'error' | 'success' | 'loading', text: string) {
	if (!el) return;
	el.hidden = false;
	el.className = `form-status ${kind}`;
	el.textContent = text;
}

function hideStatus(el: HTMLElement | null) {
	if (!el) return;
	el.hidden = true;
	el.textContent = '';
}
