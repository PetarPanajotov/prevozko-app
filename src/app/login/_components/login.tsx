'use client'

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { InputPassword } from "@/components/ui/input-password";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema, LoginValues } from "../_schemas/login.schema";
import { signIn } from "../actions";
import FacebookLoginButton from "./facebook-login-button";
import GoogleLoginButton from "./google-login-button";

export function Login() {
   const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
    defaultValues: { email: "", password: "" },
  })

    const onSubmit = async (values: LoginValues) => {
        await signIn(values)
    }

    return (
     <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel htmlFor="email">Имейл</FormLabel>
                <FormControl>
                  <Input id="email" type="email" placeholder="Имейл" {...field} />
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
                <FormLabel htmlFor="password">Парола</FormLabel>
                <FormControl>
                  <InputPassword id="password" placeholder="Парола" {...field} />
                </FormControl>
                <FormMessage />
                <a href="/forgot-password" className="w-fit">
                  Забравена парола?
                </a>
              </FormItem>
            )}
          />

          <Button type="submit">Вход</Button>
          
        </form>
      </Form>

      <div className="flex gap-2 items-center pt-7">
        <div className="flex-1 border-solid border-b" />
        <p className="shrink-0">Или</p>
        <div className="flex-1 border-solid border-b" />
      </div>

      <div className="flex flex-col gap-3 pt-5">
        <FacebookLoginButton />
        <GoogleLoginButton />
      </div>
    </>
    )
}