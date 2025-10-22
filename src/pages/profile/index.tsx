import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useProfileStore } from "@/store";
import type { UserInformation } from "@/types/User";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Profile() {

    const [currentStage, setCurrentStage] = useState<number>(1)

    const { setProfile } = useProfileStore()

    const navigate = useNavigate()

    const { register, handleSubmit } = useForm<UserInformation>({
        defaultValues: {
            firstName: "",
            middleName: "",
            lastName: "",
            suffix: "",
            civilStatus: "",
            birthdate: "",
            citizenship: "",

            region: "",
            province: "",
            cityMunicipality: "",
            baranggay: "",
            streetHouseNo: "",

            mobileNo: "",
            email: "",

            fatherFirstName: "",
            fatherMiddleName: "",
            fatherLastName: "",
            fatherSuffix: "",
            fatherBirthplace: "",
            fatherOccupation: "",

            motherFirstName: "",
            motherMiddleName: "",
            motherLastName: "",
            motherSuffix: "",
            motherBirthplace: "",
            motherOccupation: "",
        }
    })

    const stages: { stage: number, title: string }[] = [
        { stage: 1, title: "Applicant Information" },
        { stage: 2, title: "Address Information" },
        { stage: 3, title: "Contact Details" },
        { stage: 4, title: "Family Background" },
    ]

    const nextStep = () => {
        if (currentStage < stages.length) {
            setCurrentStage(currentStage + 1);
        }
    };

    const prevStep = () => {
        if (currentStage > 1) {
            setCurrentStage(currentStage - 1);
        }
    };

    const onsubmit: SubmitHandler<UserInformation> = (data) => {
        setProfile(data)
        navigate('/profile/preview')
    }

    return (
        <div className="h-full pt-5 pb-10 px-5 flex flex-col gap-3 overflow-auto">
            <div className="flex flex-col gap-2">
                <div>
                    <p className="text-lg font-semibold">Profile Completion</p>
                    <p className="text-sm">Please complete your profile to access all government eServices.</p>
                </div>

                <div className={` grid ${currentStage === 4 ? "grid-cols-1" : "grid-cols-2"} gap-2 justify-center py-2 relative`}>
                    {stages
                        .filter(stage => stage.stage === currentStage || stage.stage === currentStage + 1)
                        .map((stage, index, allStage) => (
                            <div className="flex flex-row justify-center items-center">
                                <div className="flex flex-col gap-2 justify-center items-center" >
                                    <div className={`h-10 w-10 grid place-items-center rounded-full ${stage.stage === currentStage ? "bg-[#012B54] text-white" : "bg-white border"}`} key={index}>
                                        <p>{stage.stage}</p>
                                    </div>
                                    <p className="text-xs text-center">{stage.title}</p>
                                </div>
                                {index < allStage.length - 1 && (
                                    <div className="h-1 w-1/4 bg-gray-300 absolute left-1/2 -translate-x-1/2" />
                                )}
                            </div>

                        ))}
                </div>
                <Card className="rounded-sm">
                    <CardContent>
                        <form id="user-info" onSubmit={handleSubmit(onsubmit)}>
                            <FieldGroup>
                                {currentStage === 1 &&
                                    (
                                        <div className="flex flex-col gap-2">
                                            <Field>
                                                <FieldLabel>First Name</FieldLabel>
                                                <Input type="text" {...register("firstName")} />
                                            </Field>
                                            <Field>
                                                <FieldLabel>Middle Name {"(Optional)"}</FieldLabel>
                                                <Input type="text" {...register("middleName")} />
                                            </Field>
                                            <Field>
                                                <FieldLabel>Last Name</FieldLabel>
                                                <Input type="text" {...register("lastName")} />
                                            </Field>
                                            <Field>
                                                <FieldLabel>Name Suffix (e.g., Jr. Sr. etc.)</FieldLabel>
                                                <Input type="text" {...register("suffix")} />
                                            </Field>
                                            <Field>
                                                <FieldLabel>Civil Status</FieldLabel>
                                                <Input type="text" {...register("civilStatus")} />
                                            </Field>
                                            <Field>
                                                <FieldLabel>Birthday</FieldLabel>
                                                <Input type="text" {...register("birthdate")} />
                                            </Field>
                                            <Field>
                                                <FieldLabel>Citizenship</FieldLabel>
                                                <Input type="text" {...register("citizenship")} />
                                            </Field>
                                        </div>
                                    )
                                }
                                {currentStage === 2 &&
                                    (
                                        <div className="flex flex-col gap-2">
                                            <Field>
                                                <FieldLabel>Region</FieldLabel>
                                                <Input type="text" {...register("region")} />
                                            </Field>
                                            <Field>
                                                <FieldLabel>Province {"(Optional)"}</FieldLabel>
                                                <Input type="text" {...register("province")} />
                                            </Field>
                                            <Field>
                                                <FieldLabel>City / Municipality</FieldLabel>
                                                <Input type="text" {...register("cityMunicipality")} />
                                            </Field>
                                            <Field>
                                                <FieldLabel>Baranggay</FieldLabel>
                                                <Input type="text" {...register("baranggay")} />
                                            </Field>
                                            <Field>
                                                <FieldLabel>Street / House No.</FieldLabel>
                                                <Input type="text" {...register("streetHouseNo")} />
                                            </Field>
                                        </div>
                                    )
                                }
                                {currentStage === 3 &&
                                    (
                                        <div className="flex flex-col gap-2">
                                            <Field>
                                                <FieldLabel>Mobile Number</FieldLabel>
                                                <Input type="text" {...register("mobileNo")} />
                                            </Field>
                                            <Field>
                                                <FieldLabel>Email Address</FieldLabel>
                                                <Input type="text" {...register("email")} />
                                            </Field>
                                        </div>
                                    )
                                }
                                {currentStage === 4 &&
                                    (
                                        <div className="flex flex-col gap-5">
                                            <FieldSet>
                                                <FieldLegend>Father's Information</FieldLegend>
                                                <FieldGroup>
                                                    <Field>
                                                        <Input type="text" placeholder="first name"  {...register("fatherFirstName")} />
                                                    </Field>
                                                    <Field>
                                                        <Input type="text" placeholder="middle name" {...register("fatherMiddleName")} />
                                                    </Field>
                                                    <Field>
                                                        <Input type="text" placeholder="last name" {...register("fatherLastName")} />
                                                    </Field>
                                                    <Field>
                                                        <Input type="text" placeholder="name suffix" {...register("fatherSuffix")} />
                                                    </Field>
                                                    <Field>
                                                        <FieldLabel className="text-xs">Father's Birthplace</FieldLabel>
                                                        <Input type="text" placeholder="Birthplace" {...register("fatherBirthplace")} />
                                                    </Field>
                                                    <Field>
                                                        <FieldLabel className="text-xs">Father's Occupation</FieldLabel>
                                                        <Input type="text" placeholder="Occupation" {...register("fatherOccupation")} />
                                                    </Field>
                                                </FieldGroup>
                                            </FieldSet>
                                            <FieldSet>
                                                <FieldLegend> Mother's Information</FieldLegend>
                                                <FieldGroup>
                                                    <Field>
                                                        <Input type="text" placeholder="first name" {...register("motherFirstName")} />
                                                    </Field>
                                                    <Field>
                                                        <Input type="text" placeholder="middle name" {...register("motherMiddleName")} />
                                                    </Field>
                                                    <Field>
                                                        <Input type="text" placeholder="last name" {...register("motherLastName")} />
                                                    </Field>
                                                    <Field>
                                                        <Input type="text" placeholder="name suffix" {...register("motherSuffix")} />
                                                    </Field>
                                                    <Field>
                                                        <FieldLabel className="text-xs">Mother's Birthplace</FieldLabel>
                                                        <Input type="text" placeholder="Birthplace" {...register("motherBirthplace")} />
                                                    </Field>
                                                    <Field>
                                                        <FieldLabel className="text-xs">Mother's Occupation</FieldLabel>
                                                        <Input type="text" placeholder="Occupation" {...register("motherOccupation")} />
                                                    </Field>
                                                </FieldGroup>
                                            </FieldSet>
                                        </div>
                                    )
                                }
                            </FieldGroup>
                        </form>
                    </CardContent>
                    <CardFooter className="flex flex-row justify-between">
                        <Button onClick={prevStep} type="button">Prev</Button>
                        {currentStage !== 4 && <Button onClick={nextStep}>Next</Button>}
                        {currentStage === 4 && <Button type='submit' form="user-info">Save Information</Button>}
                    </CardFooter>
                </Card>
            </div>
        </div >
    )
}