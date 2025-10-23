import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { useProfileStore } from "@/store"
import type { UserInformation } from "@/types/User"
import { useNavigate } from "react-router-dom"

export default function ProfilePreview() {

    const navigate = useNavigate()

    const { profile } = useProfileStore()

    const categories: { title: string, contents: { label: string, key: (keyof UserInformation) }[] }[] = [
        {
            title: 'Application Information',
            contents: [
                { label: 'First Name', key: 'firstName' },
                { label: "Middle Name", key: 'middleName' },
                { label: "Last Name", key: 'lastName' },
                { label: "Suffix", key: 'suffix' },
                { label: "Civil Status", key: 'civilStatus' },
                { label: "Birthdate", key: 'birthdate' },
                { label: "Citizenship", key: 'citizenship' }
            ]
        },
        {
            title: 'Address Information',
            contents: [
                { label: 'Region', key: 'region' },
                { label: "Province", key: 'province' },
                { label: "City/Municipality", key: 'cityMunicipality' },
                { label: "Baranggay", key: 'baranggay' },
                { label: "Street / House no.", key: 'streetHouseNo' },
            ]
        },
        {
            title: 'Contact Details',
            contents: [
                { label: "Mobile Number", key: 'mobileNo' },
                { label: "Email", key: 'email' },
            ]
        },
        {
            title: 'Family Background',
            contents: [
                { label: "Father First Name", key: 'fatherFirstName' },
                { label: "Father Middle Name", key: 'fatherMiddleName' },
                { label: "Father Last Name", key: 'fatherLastName' },
                { label: "Father Suffix", key: 'fatherSuffix' },
                { label: "Father Birthplace", key: 'fatherBirthplace' },
                { label: "Father Occupation", key: 'fatherOccupation' },
                { label: "Mother First Name", key: 'motherFirstName' },
                { label: "Mother Middle Name", key: 'motherMiddleName' },
                { label: "Mother Last Name", key: 'motherLastName' },
                { label: "Mother Suffix", key: 'motherSuffix' },
                { label: "Mother Birthplace", key: 'motherBirthplace' },
                { label: "Mother Occupation", key: 'motherOccupation' },
            ]
        }
    ]

    console.log(profile?.['firstName'])

    return (
        <div className="container flex flex-col gap-3">
            <div>
                <p className="text-lg font-semibold">Profile Preview</p>
                <p className="text-sm">Please review your information proceeding.</p>
            </div>

            <Card>
                <CardContent>
                    <Accordion type="single" collapsible>
                        {profile && categories.map(({ title, contents }, index) => (
                            <AccordionItem value={`item-${index}`}>
                                <AccordionTrigger className="bg-[#012B54] text-white w-full p-3">
                                    <div>{title}</div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <ul className="px-5 grid gap-2 py-2">
                                        {contents.map(({ key, label }) => (
                                            <li className="">
                                                <p>{label}: <span className="font-semibold">{profile[key]}</span></p>
                                            </li>
                                        ))}
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </CardContent>
                <CardFooter className="justify-end gap-5">
                    <Button onClick={() => navigate('/')}>Cancel</Button>
                    <Button onClick={() => navigate('/completed-profile')}>Submit</Button>
                </CardFooter>
            </Card>

        </div>
    )
}