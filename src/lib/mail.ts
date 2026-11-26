import { site } from '../data/site';

export const mailSubject = 'Projektanfrage an 9to6';

export function mailHref(subject = mailSubject, body = ''): string {
	const params = [`subject=${encodeURIComponent(subject)}`];
	if (body) params.push(`body=${encodeURIComponent(body)}`);
	return `mailto:${site.email}?${params.join('&')}`;
}
