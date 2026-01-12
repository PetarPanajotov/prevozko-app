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
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'

export default async function LoginPage(props: {
  params: { locale: string },
  searchParams: Promise<{ email?: string }>
}) {
  const {locale} = await props.params;
  const t = await getTranslations({locale, namespace: 'Auth'})

  const searchParams = await props.searchParams;
  const email = searchParams.email;

  return (
    <div className='h-full bg-linear-to-br from-white via-blue-50 to-indigo-100'>
      <main className='container flex items-center justify-center max-w-md centered mx-auto h-full'>
        {email ? <VerifyEmail email={email}></VerifyEmail> :
          <Tabs defaultValue="login">
            <Card className='min-w-100'>
              <CardHeader>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="login">{t('tabs.login')}</TabsTrigger>
                  <TabsTrigger value="register">{t('tabs.register')}</TabsTrigger>
                </TabsList>
              </CardHeader>
              <CardContent className=''>
                <TabsContent value="login">
                  <Login />
                </TabsContent>
                <TabsContent value="register">
                  <Register />
                </TabsContent>
                <div className="flex gap-2 items-center pt-7">
                  <div className="flex-1 border-solid border-b" />
                  <p className="shrink-0 text-sm text-muted-foreground">{t("divider")}</p>
                  <div className="flex-1 border-solid border-b" />
                </div>

                <div className="flex flex-col gap-3 pt-5">
                  <FacebookLoginButton />
                  <GoogleLoginButton />
                </div>
              </CardContent>
            </Card>
          </Tabs>
        }
      </main>
    </div>
  )
}