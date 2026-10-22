/** Consent for optional scripts. No analytics provider is registered today. */

export const CONSENT_KEY = '9to6-consent';
export const CONSENT_VERSION = 1;
export const CONSENT_EVENT = 'nineto6:consent';

export type ConsentChoice = 'accepted' | 'rejected';

export type ConsentRecord = {
	v: number;
	choice: ConsentChoice;
	categories: {
		essential: true;
		analytics: boolean;
	};
	ts: number;
};

type ConsentListener = (record: ConsentRecord | null) => void;

const analyticsLoaders = new Set<() => void>();
const ranLoaders = new WeakSet<() => void>();
const listeners = new Set<ConsentListener>();

function canUseStorage(): boolean {
	try {
		const probe = '__9to6_consent_probe';
		localStorage.setItem(probe, '1');
		localStorage.removeItem(probe);
		return true;
	} catch {
		return false;
	}
}

function parseRecord(raw: string | null): ConsentRecord | null {
	if (!raw) return null;
	try {
		const data = JSON.parse(raw) as Partial<ConsentRecord>;
		if (data.v !== CONSENT_VERSION) return null;
		if (data.choice !== 'accepted' && data.choice !== 'rejected') return null;
		if (typeof data.ts !== 'number') return null;
		const analytics = data.choice === 'accepted';
		return {
			v: CONSENT_VERSION,
			choice: data.choice,
			categories: { essential: true, analytics },
			ts: data.ts,
		};
	} catch {
		return null;
	}
}

export function readConsent(): ConsentRecord | null {
	if (!canUseStorage()) return null;
	return parseRecord(localStorage.getItem(CONSENT_KEY));
}

export function writeConsent(choice: ConsentChoice): ConsentRecord {
	const record: ConsentRecord = {
		v: CONSENT_VERSION,
		choice,
		categories: {
			essential: true,
			analytics: choice === 'accepted',
		},
		ts: Date.now(),
	};
	if (canUseStorage()) {
		localStorage.setItem(CONSENT_KEY, JSON.stringify(record));
	}
	notify(record);
	return record;
}

export function clearConsent(): void {
	if (canUseStorage()) localStorage.removeItem(CONSENT_KEY);
	notify(null);
}

export function analyticsAllowed(record: ConsentRecord | null = readConsent()): boolean {
	return record?.categories.analytics === true;
}

export function onConsentChange(listener: ConsentListener): () => void {
	listeners.add(listener);
	return () => listeners.delete(listener);
}

/** Register optional analytics. Runs only after Accept, never before. */
export function onAnalyticsConsent(load: () => void): void {
	analyticsLoaders.add(load);
	runAnalyticsLoaders();
}

/** Dynamic script tag for a future analytics provider. No-op without Accept. */
export function loadOptionalScript(src: string, attrs: Record<string, string> = {}): HTMLScriptElement | null {
	if (!analyticsAllowed()) return null;
	const existing = Array.from(document.scripts).find((node) => node.src === src);
	if (existing) return existing;
	const el = document.createElement('script');
	el.src = src;
	el.async = true;
	for (const [name, value] of Object.entries(attrs)) {
		el.setAttribute(name, value);
	}
	document.head.appendChild(el);
	return el;
}

function runAnalyticsLoaders(): void {
	if (!analyticsAllowed()) return;
	for (const load of analyticsLoaders) {
		if (ranLoaders.has(load)) continue;
		ranLoaders.add(load);
		load();
	}
}

function notify(record: ConsentRecord | null): void {
	document.documentElement.dataset.consent = record?.choice ?? '';
	window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: record }));
	for (const listener of listeners) listener(record);
	runAnalyticsLoaders();
}

function exposeApi(): void {
	window.nineto6Consent = {
		get: readConsent,
		analyticsAllowed: () => analyticsAllowed(),
		onAnalytics: onAnalyticsConsent,
		loadScript: loadOptionalScript,
	};
}

export function initCookieBanner(): void {
	const root = document.querySelector<HTMLElement>('[data-cookie-banner]');
	if (!root) return;

	exposeApi();
	document.documentElement.dataset.consent = readConsent()?.choice ?? '';

	const acceptBtn = root.querySelector<HTMLButtonElement>('[data-cookie-accept]');
	const rejectBtn = root.querySelector<HTMLButtonElement>('[data-cookie-reject]');
	const setHeight = () => {
		const height = root.hidden ? 0 : Math.ceil(root.getBoundingClientRect().height);
		document.documentElement.style.setProperty('--cookie-banner-h', `${height}px`);
	};

	const show = () => {
		root.hidden = false;
		document.body.classList.add('has-cookie-banner');
		setHeight();
	};

	const hide = () => {
		root.hidden = true;
		document.body.classList.remove('has-cookie-banner');
		setHeight();
	};

	const apply = (choice: ConsentChoice) => {
		writeConsent(choice);
		hide();
	};

	acceptBtn?.addEventListener('click', () => apply('accepted'));
	rejectBtn?.addEventListener('click', () => apply('rejected'));

	document.addEventListener('click', (event) => {
		const target = event.target;
		if (!(target instanceof Element)) return;
		if (!target.closest('[data-cookie-reset]')) return;
		event.preventDefault();
		clearConsent();
		show();
		root.querySelector<HTMLButtonElement>('[data-cookie-reject]')?.focus();
	});

	window.addEventListener('storage', (event) => {
		if (event.key !== CONSENT_KEY) return;
		const next = readConsent();
		document.documentElement.dataset.consent = next?.choice ?? '';
		if (next) hide();
		else show();
	});

	window.addEventListener('resize', setHeight);

	const revealIfNeeded = () => {
		if (readConsent()) hide();
		else show();
	};

	if (document.readyState === 'complete') {
		revealIfNeeded();
	} else {
		window.addEventListener('load', revealIfNeeded, { once: true });
	}
}

declare global {
	interface Window {
		nineto6Consent?: {
			get: () => ConsentRecord | null;
			analyticsAllowed: () => boolean;
			onAnalytics: (load: () => void) => void;
			loadScript: (src: string, attrs?: Record<string, string>) => HTMLScriptElement | null;
		};
	}

	interface WindowEventMap {
		'nineto6:consent': CustomEvent<ConsentRecord | null>;
	}
}
