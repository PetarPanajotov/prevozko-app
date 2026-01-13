'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { InputPassword } from '@/components/ui/input-password';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { loginSchema, LoginValues } from '../_schemas/login.schema';
import { signIn } from '../actions';

export function Login() {
  const t = useTranslations('Login');
  const tc = useTranslations('Common.fields');

  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    mode: 'onBlur',
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = async (values: LoginValues) => {
    await signIn(values);
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel htmlFor="email">{tc('email.label')}</FormLabel>
                <FormControl>
                  <Input id="email" type="email" placeholder={tc('email.placeholder')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="password">{tc('password.label')}</FormLabel>
                <FormControl>
                  <InputPassword
                    id="password"
                    placeholder={tc('password.placeholder')}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
                <Link href="/forgot-password" className="w-fit">
                  {t('forgot')}
                </Link>
              </FormItem>
            )}
          />

          <Button type="submit">{t('submit')}</Button>
        </form>
      </Form>
    </>
  );
}
