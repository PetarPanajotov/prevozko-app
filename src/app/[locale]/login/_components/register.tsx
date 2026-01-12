'use client'
import { useForm } from "react-hook-form"
import { registerSchema, registerValues } from "../_schemas/register.schema"
import { signUp } from "../actions"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { InputPassword } from "@/components/ui/input-password"
import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"

export function Register() {
    const t = useTranslations("Register");
    const tc = useTranslations("Common.fields");

    const form = useForm<registerValues>({
        resolver: zodResolver(registerSchema),
        mode: "onBlur",
        defaultValues: { email: "", password: "" },
    })

    const onSubmit = async (values: registerValues) => {
        await signUp(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className="">
                            <FormLabel htmlFor="email">{tc("email.label")}</FormLabel>
                            <FormControl>
                                <Input id="email" type="email" placeholder={tc("email.placeholder")} {...field} />
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
                            <FormLabel htmlFor="password">{tc("password.label")}</FormLabel>
                            <FormControl>
                                <InputPassword id="password" placeholder={tc("password.placeholder")} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit">{t("submit")}</Button>

            </form>
        </Form>
    )
}