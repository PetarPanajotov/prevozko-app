'use client'

import { Button } from '@/components/ui/button'
import { supabaseBrowser } from '@/lib/supabase/browser'

export default function GoogleLoginButton() {
  const supabase = supabaseBrowser()

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    })

    if (error) {
      console.error('Error logging in with Google:', error.message)
    }
  }

  return (
    <Button
      onClick={handleLogin}
      className="bg-white text-black w-100 border border-gray-300 hover:bg-gray-100"
    >
      <GoogleIcon />
        Google
    </Button>
  )
}

function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 48 48">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.72 1.22 9.21 3.6l6.9-6.9C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l8.04 6.25C12.58 13.24 17.9 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.1 24.55c0-1.64-.15-3.21-.42-4.73H24v9.02h12.4c-.53 2.83-2.13 5.23-4.53 6.83l7.02 5.44c4.1-3.78 6.21-9.36 6.21-15.56z"/>
      <path fill="#FBBC05" d="M10.6 28.47c-.5-1.5-.78-3.1-.78-4.72s.28-3.22.78-4.72l-8.04-6.25C.92 16.3 0 20.04 0 24c0 3.96.92 7.7 2.56 11.22l8.04-6.25z"/>
      <path fill="#34A853" d="M24 48c6.48 0 11.92-2.13 15.9-5.8l-7.02-5.44c-1.95 1.32-4.45 2.1-8.88 2.1-6.1 0-11.42-3.74-13.4-8.97l-8.04 6.25C6.51 42.62 14.62 48 24 48z"/>
    </svg>
  )
}