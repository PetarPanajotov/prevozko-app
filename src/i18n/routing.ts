import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation'; // Добави това

export const routing = defineRouting({
  locales: ['en', 'bg'],
  defaultLocale: 'bg',
  localePrefix: 'always',
});

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
