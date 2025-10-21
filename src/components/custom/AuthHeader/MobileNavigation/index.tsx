import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import type { NavItems } from "@/types/NavigationType";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export function MobileNavigation({ nav }: { nav: NavItems[] }) {
    const { pathname } = useLocation();
    const [open, setOpen] = useState<boolean>(false)

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Menu className="text-white" />
            </SheetTrigger>
            <SheetContent side="left">
                <SheetHeader>Authentication</SheetHeader>
                <SheetDescription>
                </SheetDescription>
                <ul className="flex flex-col px-5 gap-3">
                    {nav.map(({ label, url }) => {
                        const userLocation = `/auth/${url}`
                        return (
                            <li
                                className={`${pathname == userLocation ? "bg-[#012B54] text-white" : ""} p-2 rounded`}
                                onClick={() => setOpen(false)}
                                key={`${label}-${url}`}
                            >
                                <Link to={url}>
                                    <p>{label}</p>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </SheetContent>
        </Sheet>
    )
}