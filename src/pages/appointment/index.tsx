import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { useAppointment } from "@/store"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function Appointment() {
    const navigate = useNavigate()
    const [date, setDate] = useState<Date | undefined>()
    const { setDate: setAppointmentDate, date: appointmentDate } = useAppointment()
    const dateOfAppointment = useAppointment(state => state.date)

    function handleConfirm(date: Date | undefined) {
        navigate(`/confirmation`)
        setAppointmentDate(date)
        console.log(appointmentDate)
        console.log(dateOfAppointment)
    }
    return (
        <div className="container flex flex-col gap-3">
            <div className="flex flex-col gap-1">
                <p className="font-semibold text-xl">Book Your Appointment</p>
                <p className="text-sm">Please select your preferred appointment date from the calendar below:</p>
            </div>
            <div className="flex flex-col gap-5">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border shadow-sm mx-auto"
                    captionLayout="dropdown"
                />
                <p className="text-xs">
                    <span className="font-bold">Note:</span> Medical appointments are available from <span className="font-bold">8:00 AM - 6:00 PM.</span> Please arrive within the indicated hours on your selected date.</p>
                <div className="flex flex-row justify-between">
                    <Button className="border shadow-sm " asChild>
                        <Link to={'/'} replace>
                            Back
                        </Link>
                    </Button>
                    <Button className="border shadow-sm" disabled={date === undefined} onClick={() => handleConfirm(date)}>
                        Confirm Appointment
                    </Button>
                </div>
            </div>
        </div>
    )
}