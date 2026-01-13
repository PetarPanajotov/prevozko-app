'use server';

import { redirect } from 'next/navigation';
import { supabaseServer } from '@/lib/supabase/server';
import { registerValues } from './_schemas/register.schema';
import { LoginValues } from './_schemas/login.schema';

export async function signUp(formData: registerValues) {
  const email = formData.email;
  const password = formData.password;

  const supabase = await supabaseServer();

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
    },
  });

  if (error) throw new Error(error.message);

  redirect(`/login?email=${email}`);
}

export async function signIn(formData: LoginValues) {
  const email = formData.email;
  const password = formData.password;

  const supabase = await supabaseServer();
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw new Error(error.message);

  redirect('/home');
}

export async function signOut() {
  const supabase = await supabaseServer();
  await supabase.auth.signOut();
  redirect('/login');
}
