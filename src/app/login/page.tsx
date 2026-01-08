import { Input } from '@/components/ui/input'
import { signIn } from './actions'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import FacebookLoginButton from './_components/FacebookLoginButton'
import GoogleLoginButton from './_components/GoogleLoginButton'

export default function LoginPage({
  searchParams,
}: {
  searchParams?: { checkEmail?: string }
}) {
  return (
    <main className='container max-w-md centered mx-auto'>
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
            <Button type="submit">Вход</Button>
          </form>
          <div className='flex gap-2 items-center pt-7'>
            <div className='flex-1 border-solid border-b-1'></div>
            <p className='shrink-0'>Или</p>
            <div className='flex-1 border-solid border-b-1'></div>
          </div>
          <div className='flex flex-col gap-3 pt-5'>
          <FacebookLoginButton />
          <GoogleLoginButton />

          </div>
        </CardContent>
      </Card>
    </main>
  )
}