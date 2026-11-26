export async function onRequest(context) {
	const raw = context.request.url;
	let parsed;
	try {
		parsed = new URL(raw);
	} catch {
		return context.next();
	}

	// Browsers send GET / for both https://9to6.de and https://9to6.de/.
	// Redirect only when the raw URL really has no slash after the host.
	const bareHome =
		(parsed.hostname === '9to6.de' || parsed.hostname === 'www.9to6.de') &&
		parsed.pathname === '/' &&
		!raw.includes(`${parsed.hostname}/`);
	if (bareHome) {
		return Response.redirect(`https://9to6.de/${parsed.search}`, 301);
	}

	if (parsed.pathname === '/404' || parsed.pathname === '/404/') {
		const response = await context.next();
		if (response.status >= 300 && response.status < 400) return response;
		const headers = new Headers(response.headers);
		headers.set('X-Robots-Tag', 'noindex, follow');
		return new Response(response.body, { status: 404, headers });
	}

	return context.next();
}
