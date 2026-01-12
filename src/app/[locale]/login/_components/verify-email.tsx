import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

type VerifyEmailProps = {email: string}

export function VerifyEmail({email}: VerifyEmailProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    <h2>Потвърдете имейла си</h2>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p>Изпратихме линк за потвърждение на &quot;<b>{email}</b>&quot;. Моля, проверете пощата си, за да завършите регистрацията.</p>
            </CardContent>
            <CardFooter>
                    <Link className="w-full" href={'/login'}>
                <Button className="w-full">
                        Обратно към вход
                </Button>
                    </Link>
            </CardFooter>
        </Card>
    )
}