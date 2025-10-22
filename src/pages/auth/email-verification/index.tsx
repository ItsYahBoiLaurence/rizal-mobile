import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import type { UserVerification } from "@/types/User";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function EmailVerification() {

    const navigate = useNavigate()

    const { register, handleSubmit } = useForm<UserVerification>({
        defaultValues: {
            code: ""
        }
    })

    const onsubmit: SubmitHandler<UserVerification> = (code) => {
        console.log(code)
        navigate('/')
    }

    return (
        <div className="h-full grid place-items-center">
            <Card>
                <CardHeader className="font-semibold">Email Verification</CardHeader>
                <CardContent>
                    <form className="flex flex-col gap-5" onSubmit={handleSubmit(onsubmit)}>
                        <p>
                            We have sent a verification code to your email.
                        </p>
                        <Field>
                            <Input type="text" placeholder="Enter Verification Code" className="h-12" {...register("code")} />
                        </Field>
                        <Button variant={'ghost'} type="button" className="text-blue-600">Resend Verification Code</Button>
                        <Button type="submit">Submit</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}