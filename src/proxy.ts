import { NextResponse, type NextRequest } from 'next/server';

import { routing } from '@/i18n/routing';

export type Locale = (typeof routing.locales)[number];

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const cookieLocale = getLanguageCookie(request);
  const urlLocale = getLocaleFromUrl(pathname);

  if (urlLocale) {
    console.log(urlLocale);
    return normalizeCookieFromUrl(urlLocale, cookieLocale);
  }

  if (cookieLocale) {
    return redirectToLocale(request, cookieLocale);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};

function getLocaleFromUrl(pathname: string): Locale | null {
  const segment = pathname.split('/')[1];
  return isLocale(segment) ? segment : null;
}

function getLanguageCookie(request: NextRequest): Locale | null {
  const value = request.cookies.get('lang')?.value;
  return isLocale(value) ? value : null;
}

function normalizeCookieFromUrl(urlLocale: Locale, cookieLocale: Locale | null) {
  const response = NextResponse.next();

  if (cookieLocale !== urlLocale) {
    response.cookies.set('lang', urlLocale, { path: '/', secure: true });
  }

  return response;
}

function redirectToLocale(request: NextRequest, locale: Locale) {
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${url.pathname}`;
  return NextResponse.redirect(url);
}

function isLocale(value: string | undefined): value is Locale {
  return routing.locales.includes(value as Locale);
}
