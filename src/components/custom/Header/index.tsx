import type { NavItems } from "@/types/NavigationType"
import { Link } from "react-router-dom"
import { MobileNavigation } from "./MobileNavigation"
import { useMediaQuery } from "@/hooks/useMediaQuery"
import { Avatar, AvatarImage } from "@/components/ui/avatar"

export default function Header() {

    const isMobile = useMediaQuery("(max-width: 1024px)")

    const navigation: NavItems[] = [
        {
            label: "Home",
            url: "/"
        },
        {
            label: "Profile",
            url: "/profile"
        },
    ]

    const navItems = navigation.map((nav, index) => (
        <li key={`${nav.label}-${index}`}>
            <Link to={nav.url}>
                {nav.label}
            </Link>
        </li>
    ))

    return (
        <header className="p-5 bg-[#012B54] sticky top-0">
            {isMobile
                ?
                <MobileNavigation nav={navigation} />
                :
                <ul className="flex flex-row gap-2">
                    {navItems}
                </ul>
            }
            <Avatar className="absolute top-0 left-1/2 -translate-x-1/2 size-[80px] bg-[#012B54] p-0.5">
                <AvatarImage src="/appLogo.svg" className="rounded-full" />
            </Avatar>
        </header>
    )
}