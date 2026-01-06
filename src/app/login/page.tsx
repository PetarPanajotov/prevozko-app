import { signIn, signUp } from './actions'

export default function LoginPage({
  searchParams,
}: {
  searchParams?: { checkEmail?: string }
}) {
  return (
    <main style={{ maxWidth: 420, margin: '60px auto', padding: 16 }}>
      <h1>Auth</h1>

      {searchParams?.checkEmail ? (
        <p>Check your email to confirm your account.</p>
      ) : null}

      <h2>Sign in</h2>
      <form action={signIn} style={{ display: 'grid', gap: 10 }}>
        <input name="email" type="email" placeholder="Email" required />
        <input name="password" type="password" placeholder="Password" required />
        <button type="submit">Sign in</button>
      </form>

      <hr style={{ margin: '24px 0' }} />

      <h2>Register</h2>
      <form action={signUp} style={{ display: 'grid', gap: 10 }}>
        <input name="email" type="email" placeholder="Email" required />
        <input name="password" type="password" placeholder="Password" required />
        <button type="submit">Create account</button>
      </form>
    </main>
  )
}