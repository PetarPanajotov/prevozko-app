import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getTranslations } from 'next-intl/server';
import FacebookLoginButton from './_components/facebook-login-button';
import GoogleLoginButton from './_components/google-login-button';
import { Login } from './_components/login';
import { Register } from './_components/register';
import { VerifyEmail } from './_components/verify-email';

export default async function LoginPage(props: {
  params: { locale: string };
  searchParams: Promise<{ email?: string }>;
}) {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: 'Auth' });

  const searchParams = await props.searchParams;
  const email = searchParams.email;

  return (
    <div className="h-full bg-linear-to-br from-white via-blue-50 to-indigo-100">
      <main className="centered container mx-auto flex h-full max-w-md items-center justify-center">
        {email ? (
          <VerifyEmail email={email}></VerifyEmail>
        ) : (
          <Tabs defaultValue="login">
            <Card className="min-w-100">
              <CardHeader>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="login">{t('tabs.login')}</TabsTrigger>
                  <TabsTrigger value="register">{t('tabs.register')}</TabsTrigger>
                </TabsList>
              </CardHeader>
              <CardContent className="">
                <TabsContent value="login">
                  <Login />
                </TabsContent>
                <TabsContent value="register">
                  <Register />
                </TabsContent>
                <div className="flex items-center gap-2 pt-7">
                  <div className="flex-1 border-b border-solid" />
                  <p className="text-muted-foreground shrink-0 text-sm">{t('divider')}</p>
                  <div className="flex-1 border-b border-solid" />
                </div>

                <div className="flex flex-col gap-3 pt-5">
                  <FacebookLoginButton />
                  <GoogleLoginButton />
                </div>
              </CardContent>
            </Card>
          </Tabs>
        )}
      </main>
    </div>
  );
}
