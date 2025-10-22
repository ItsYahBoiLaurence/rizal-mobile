import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import type { UserRegister } from "@/types/User";
import { Eye, EyeClosed } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Register() {

    const navigate = useNavigate()

    const { register, handleSubmit, watch } = useForm<UserRegister>({
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: ""
        }
    })

    const passwordData = watch('password')
    const confirmPasswordData = watch('confirmPassword')

    const [isVisible, setIsVisible] = useState<boolean>(true)
    const [confirmPassword, setConfirmPassword] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    const onSubmit: SubmitHandler<UserRegister> = (account) => {
        console.log(account)
        navigate('/auth/email-verification')
    }

    useEffect(() => {
        if (confirmPasswordData) {
            if (passwordData !== confirmPasswordData) {
                setError("Passwords don't match!")
            } else {
                setError(null)
            }
        } else {
            setError(null)
        }
    }, [passwordData, confirmPasswordData])

    return (
        <div className=" h-full grid place-items-center">
            <div className="w-full p-5">
                <div className="flex flex-col gap-5 mb-5">
                    <p className="text-center text-3xl font-semibold">Register</p>
                    <p className="text-center">Register your account to all your benefits!</p>
                </div>
                <Card>
                    <CardHeader className="font-semibold">Account Details</CardHeader>
                    <CardContent>
                        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-col gap-2">
                                <Field>
                                    <FieldLabel>Email</FieldLabel>
                                    <Input type="email" {...register("email")} />
                                </Field>
                                <Field>
                                    <FieldLabel>Password</FieldLabel>
                                    <InputGroup>
                                        <InputGroupInput type={isVisible ? "password" : "text"} {...register("password")} />
                                        <InputGroupAddon align="inline-end">
                                            <Button variant={"ghost"} type="button"
                                                onClick={() => setIsVisible(!isVisible)}>
                                                {isVisible ? <EyeClosed /> : < Eye />}
                                            </Button>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </Field>
                                <Field>
                                    <FieldLabel>Confirm Password</FieldLabel>
                                    <InputGroup>
                                        <InputGroupInput type={confirmPassword ? "password" : "text"}  {...register("confirmPassword")} />
                                        <InputGroupAddon align="inline-end">
                                            <Button variant={"ghost"} type="button"
                                                onClick={() => setConfirmPassword(!confirmPassword)}>
                                                {confirmPassword ? <EyeClosed /> : < Eye />}
                                            </Button>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </Field>
                            </div>
                            <Button type="submit">Register</Button>
                        </form>
                        {error && <p className="text-red-500">{error}</p>}
                    </CardContent>
                </Card>
            </div>

        </div>
    )
}