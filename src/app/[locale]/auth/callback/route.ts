import { NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase/server';

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');
  const next = searchParams.get('next') ?? '/app';

  if (code) {
    const supabase = await supabaseServer();

    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (error) {
      console.error('Auth error:', error.message);
      return NextResponse.redirect(`${origin}/login?error=auth-code-error`);
    }
  }

  return NextResponse.redirect(`${origin}${next}`);
}
