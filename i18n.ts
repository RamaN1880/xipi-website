import { getRequestConfig } from 'next-intl/server';

const locales = ['fr', 'en'];

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;
  if (!locale || !locales.includes(locale)) {
    const { notFound } = await import('next/navigation');
    notFound();
  }
  return {
    locale: locale!,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
