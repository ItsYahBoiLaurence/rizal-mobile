import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAppointment } from "@/store";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {

    const { setType } = useAppointment()
    const [selectedCard, setSelectedCard] = useState<string | null>(null)
    const navigate = useNavigate()
    const cards = [
        {
            image: '/medical.svg',
            title: "Medical Assitance",
            description: "For medical emergencies and hospitalization"
        },
        {
            image: '/envelope.svg',
            title: "Livelihood Support",
            description: "For small business or income recovery needs"
        },
        {
            image: '/tuition.svg',
            title: "Educational Assistance",
            description: "For tuition fees, supplies, or school expenses"
        }
    ]

    return (
        <div className="grid place-items-center h-full">
            <div className=" px-5 py-10 flex flex-col sm:gap-10 gap-5 items-center">
                <p className="text-lg font-semibold">Select the type of disbursement you wish to apply for:</p>
                <div className="flex flex-row w-full flex-wrap gap-5 justify-center">
                    {cards.map((card) => (
                        <Card
                            key={card.title}
                            className={`sm:w-1/4 w-[45%] border-[#012B54] hover:bg-[#012B54] hover:text-white py-3 ${selectedCard === card.title ? "bg-[#012B54] text-white" : ""}`}
                            onClick={() => {
                                setSelectedCard(card.title)
                            }}
                        >
                            <CardContent className=" p-2 flex flex-col items-center gap-y-2">
                                <img src={card.image} className="size-[80px]" />
                                <p className="text-center text-sm font-semibold">{card.title}</p>
                                <p className="text-center text-xs">{card.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <Button
                    className="bg-[#012B54] w-2/3"
                    onClick={() => {
                        setType(selectedCard)
                        navigate(`/appointment/${selectedCard}`)
                    }}
                    disabled={selectedCard === null}
                >
                    Proceed to Book Appointment
                </Button>
            </div>
        </div>
    )
}