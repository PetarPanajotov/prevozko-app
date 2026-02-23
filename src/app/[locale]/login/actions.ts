'use server';

import { redirect } from '@/i18n/routing';
import { supabaseServer } from '@/lib/supabase/server';
import { LoginValues } from './_schemas/login.schema';
import { registerValues } from './_schemas/register.schema';

export async function signUp({ email, password }: registerValues, locale: 'en' | 'bg' = 'en') {
  try {
    await performSupabaseRegister({ email, password });
    redirect({ href: `/login?email=${email}`, locale });
  } catch (error) {
    throw error;
  }
}

export async function signIn({ email, password }: LoginValues, locale: 'en' | 'bg' = 'en') {
  try {
    await performSupabaseAuth({ email, password });
  } catch (error) {
    throw error;
  }
  redirect({ href: '/home', locale });
}

export async function signOut() {
  const supabase = await supabaseServer();
  await supabase.auth.signOut();
  redirect({ href: '/login', locale: 'en' });
}

async function performSupabaseRegister({ email, password }: registerValues) {
  const supabase = await supabaseServer();
  const emailRedirectUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: emailRedirectUrl,
    },
  });

  if (error) throw error;

  return data;
}

async function performSupabaseAuth({ email, password }: LoginValues) {
  const supabase = await supabaseServer();

  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) throw error;

  return data;
}
