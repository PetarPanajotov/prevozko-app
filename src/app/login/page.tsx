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
import { Login } from './_components/login'
import { Register } from './_components/register'

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
                  <Login />
                </TabsContent>
                <TabsContent value="register">
                  <Register />
                </TabsContent>
              </CardContent>
            </Card>
          </Tabs>
        }
      </main>
    </div>
  )
}