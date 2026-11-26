export async function onRequest(context) {
	const raw = context.request.url;
	let parsed;
	try {
		parsed = new URL(raw);
	} catch {
		return context.next();
	}

	const apex = parsed.hostname === '9to6.de' || parsed.hostname === 'www.9to6.de';
	const bare = apex && parsed.pathname === '/' && !raw.includes(`${parsed.hostname}/`);
	if (bare) {
		return Response.redirect(`https://9to6.de/${parsed.search}`, 301);
	}

	return context.next();
}
