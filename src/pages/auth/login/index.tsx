import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { useForm, type SubmitHandler } from "react-hook-form"
import type { UserCreds } from "@/types/User";
import { useAuthStore } from "@/store";

export default function Login() {

    const { login } = useAuthStore()
    const navigate = useNavigate()
    const { register, handleSubmit, reset } = useForm<UserCreds>({
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const onSubmit: SubmitHandler<UserCreds> = (data) => {
        login(data)
        reset()
        navigate('/')
    }

    return (
        <div className="h-[calc(100vh-65px)] grid place-items-center">
            <div className="w-full p-5">
                <div className="flex flex-col gap-5 mb-5">
                    <p className="text-center text-3xl font-semibold">Login</p>
                    <p className="text-center">Enter your credentials to access your account</p>
                </div>
                <Card>
                    <CardContent>
                        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                            <Field>
                                <FieldLabel>Username</FieldLabel>
                                <Input {...register("email")} />
                            </Field>
                            <Field>
                                <FieldLabel>Password</FieldLabel>
                                <Input {...register("password")} type="password" />
                            </Field>
                            <Link to={'/auth/forgot-password'} className="text-sm text-center underline text-blue-600">Forgot your Password?</Link>
                            <Button className="bg-[#012B54]" type="submit">Login</Button>
                            <p className="text-center">Don't have an account? <Link to={'/auth/register'} className="text-blue-600">Sign up</Link></p>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}