import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { useAuthStore } from "@/store";
import type { NavItems } from "@/types/NavigationType";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export function MobileNavigation({ nav }: { nav: NavItems[] }) {
    const { pathname } = useLocation();
    const [open, setOpen] = useState<boolean>(false)
    const { loggedIn, logout } = useAuthStore()

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Menu className="text-white" />
            </SheetTrigger>
            <SheetContent side="left">
                <SheetHeader>Sheet Header</SheetHeader>
                <ul className="flex flex-col px-5 gap-3">
                    {nav.map(({ label, url }) => (
                        <li
                            className={`${pathname == url ? "bg-[#012B54] text-white" : ""} p-2 rounded`}
                            onClick={() => setOpen(false)}
                        >
                            <Link to={url}>
                                <p>{label}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
                <SheetFooter>
                    {loggedIn
                        ?
                        <Button className="bg-[#012B54]" onClick={logout}>Logout</Button>
                        :
                        <Link
                            to={'/auth/login'}
                            className="bg-[#012B54] text-white p-1 text-center rounded"
                        >
                            Login
                        </Link>
                    }
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}