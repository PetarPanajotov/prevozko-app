import { NextResponse } from 'next/server'
import { supabaseServer } from '@/lib/supabase/server'

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  // It's good practice to handle a 'next' param for dynamic redirects
  const next = searchParams.get('next') ?? '/app'

  if (code) {
    const supabase = await supabaseServer()
    
    // CRITICAL: You must await this call
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    
    if (error) {
      console.error('Auth error:', error.message)
      // Redirect to a specific error page if the exchange fails
      return NextResponse.redirect(`${origin}/login?error=auth-code-error`)
    }
  }

  // URL to redirect to after sign in process completes
  return NextResponse.redirect(`${origin}${next}`)
}