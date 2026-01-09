import { Input } from '@/components/ui/input'
import { signIn, signUp } from './actions'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import FacebookLoginButton from './_components/facebook-login-button'
import GoogleLoginButton from './_components/google-login-button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { VerifyEmail } from './_components/verify-email'
import { InputPassword } from '@/components/ui/input-password'

export default async function LoginPage(props: {
  searchParams: Promise<{ email?: string }>
}) {

const searchParams = await props.searchParams;
const email = searchParams.email;

  return (
    <div className='h-full bg-gradient-to-br from-white via-blue-50 to-indigo-100'>
      <main className='container flex items-center justify-center max-w-md centered mx-auto h-full'>
        {email ? <VerifyEmail email={email}></VerifyEmail> :
          <Tabs defaultValue="login">
            <Card className='min-w-100'>
              <CardHeader>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="login">Вход</TabsTrigger>
                  <TabsTrigger value="register">Регистрация</TabsTrigger>
                </TabsList>
              </CardHeader>
              <CardContent className=''>
                <TabsContent value="login">
                  <form action={signIn} className='flex flex-col gap-5'>
                    <div className='grid gap-2'>
                      <Label htmlFor="email">Имейл</Label>
                      <Input id='email' type="email" placeholder="Имейл" />
                    </div>
                    <div className='grid gap-2'>
                      <Label htmlFor="email">Парола</Label>
                      <InputPassword id='password' placeholder="Парола" />
                      <a href="/forgot-password" className='w-fit'>Забравена парола?</a>
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
                </TabsContent>
                <TabsContent value="register">
                  <form action={signUp} className='flex flex-col gap-5'>
                    <div className='grid gap-2'>
                      <Label htmlFor="email">Имейл</Label>
                      <Input id='email' name='email' type="email" placeholder="Имейл" />
                    </div>
                    <div className='grid gap-2'>
                      <Label htmlFor="email">Парола</Label>
                      <InputPassword id='password' placeholder="Парола" />
                    </div>
                    <Button type="submit">Вход</Button>
                  </form>
                </TabsContent>
              </CardContent>
            </Card>
          </Tabs>
        }
      </main>
    </div>
  )
}