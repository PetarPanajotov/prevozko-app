'use client'
import { useForm } from "react-hook-form"
import { registerSchema, registerValues } from "../_schemas/register.schema"
import { signUp } from "../actions"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { InputPassword } from "@/components/ui/input-password"
import { Button } from "@/components/ui/button"

export function Register() {
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
                        </FormItem>
                    )}
                />

                <Button type="submit">Регистрация</Button>

            </form>
        </Form>
    )
}