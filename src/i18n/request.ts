import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // Validate that the incoming locale is valid
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as 'bg' | 'en')) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    // Adjust the path below to where your JSON files are stored
    messages: (await import(`../messages/${locale}.json`)).default
  };
});