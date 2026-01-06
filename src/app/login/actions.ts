'use server'

import { redirect } from 'next/navigation'
import { supabaseServer } from '@/lib/supabase/server'

export async function signUp(formData: FormData) {
  const email = String(formData.get('email') ?? '')
  const password = String(formData.get('password') ?? '')

  const supabase = await supabaseServer()

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
    },
  })

  if (error) throw new Error(error.message)

  // If email confirmation is enabled, user must confirm via email
  redirect('/login?checkEmail=1')
}

export async function signIn(formData: FormData) {
  const email = String(formData.get('email') ?? '')
  const password = String(formData.get('password') ?? '')

  const supabase = await supabaseServer()
  const { error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) throw new Error(error.message)

  redirect('/app')
}

export async function signOut() {
  const supabase = await supabaseServer()
  await supabase.auth.signOut()
  redirect('/login')
}