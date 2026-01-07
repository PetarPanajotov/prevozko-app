import { Input } from '@/components/ui/input'
import { signIn } from './actions'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function LoginPage({
  searchParams,
}: {
  searchParams?: { checkEmail?: string }
}) {
  return (
    <main style={{ maxWidth: 420, margin: '60px auto', padding: 16 }}>

      {searchParams?.checkEmail ? (
        <p>Check your email to confirm your account.</p>
      ) : null}

      <Card>
        <CardHeader>
          <CardTitle className='text-center'>
            <h4>
              Вход
            </h4>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form action={signIn} className='flex flex-col gap-5'>
            <div className='grid gap-2'>
              <Label htmlFor="email">Имейл</Label>
              <Input id='email' type="email" placeholder="Имейл" />
            </div>
            <div className='grid gap-2'>
              <Label htmlFor="email">Парола</Label>
              <Input id='password' type="password" placeholder="Парола" />
            </div>
            <button type="submit">Вход</button>
          </form>
        </CardContent>
      </Card>
      <hr style={{ margin: '24px 0' }} />

    </main>
  )
}