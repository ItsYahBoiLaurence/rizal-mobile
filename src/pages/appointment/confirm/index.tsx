import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { formatDate } from "@/lib/formatDate"
import { generateReference } from "@/lib/generateRefNum"
import { useAppointment } from "@/store"
import { useNavigate } from "react-router-dom"

export function Confirm() {

    const { date, type } = useAppointment()

    const highlight = "font-semibold text-[#012B54]"

    const requirements: { description: string }[] = [
        { description: "Valid Government Id (with photo and signature)" },
        { description: "Application form or reference number (printed or screenshot)" },
        { description: "Medical certificate signed by an attending physician" },
        { description: "Hospital bill or statement of account (if applicable)" },
        { description: "Doctor’s prescription or medical abstract" },
        { description: "Barangay indigency certificate (if required for assistance validation)" },
    ]

    const reminders: { description: string }[] = [
        { description: "Please arrive within the designated hours on your selected date." },
        { description: "Late or missed appointments may require rescheduling." },
    ]

    const navigate = useNavigate()

    return (
        <div className="h-full pt-5 pb-10 px-5 flex flex-col gap-3 overflow-auto">
            <p className="text-xl font-bold">Appointment Successfully Scheduled!</p>
            <div className="text-sm">
                <p>Your appointment has been confirmed.</p>
                <p>An email confirmation has been sent to your registered email address with the appointment details.</p>
            </div>
            <Card className="py-0 gap-2">
                <CardHeader className="text-center pt-2 uppercase bg-[#012B54] text-white rounded-t-lg">Appointment Details</CardHeader>
                <CardContent className="bg-white rounded-b-lg py-2">
                    <div>
                        <p>Disbursement Type: <span className={`${highlight}`}>{type}</span></p>
                        <p>Date: <span className={`${highlight}`}>{date && formatDate(date.toLocaleString())}</span></p>
                        <p>Schedule: <span className={`${highlight}`}>8:00 AM - 6:00 PM</span></p>
                        <p>Reference Number: <span className={`${highlight}`}>{generateReference()}</span></p>
                    </div>
                </CardContent>
            </Card>
            <div className="flex flex-col gap-2">
                <p className="font-semibold">Requirements to Bring</p>
                <div>
                    <p className="text-sm">Please bring the following documents on your appointment date:</p>
                    <ul className="list-disc px-5 text-sm flex flex-col" >
                        {requirements.map((requirement, index) => (
                            <li key={index}>{requirement.description}</li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col gap-2">
                    <p className=" font-bold text-[12px] italic">Tip: Bring photocopies of your documents for faster verification.</p>
                    <div>
                        <p className="text-xs  font-bold">Reminders</p>
                        <ul className="text-xs list-decimal px-5 font-bold">
                            {reminders.map((reminder, index) => (
                                <li key={index}>
                                    {reminder.description}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <Button onClick={() => navigate('/')}>Return to Homepage</Button>
        </div>
    )
}