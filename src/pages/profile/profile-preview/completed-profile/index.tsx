import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Success from '/success.svg'
export default function CompletedProfile() {
    const navigate = useNavigate()
    return (
        <div className="container grid place-items-center">
            <div className="flex flex-col items-center gap-5">
                <img src={Success} className="w-[200px]" loading="lazy" />
                <div className="flex flex-col gap-3 text-center items-center">
                    <p className="text-lg font-semibold">
                        Profile Completed Successfully
                    </p>
                    <p className="text-sm">Your personal information has been saved, and your profile is now complete. You can now proceed to book your appointment or access available eServices.</p>
                    <p className="text-sm">You may also view or edit your profile anytime in your account settings.</p>
                    <Button className="bg-[#4BAE4F] w-2/3" onClick={() => navigate('/')}>Continue</Button>
                </div>
            </div>
        </div>
    )
}