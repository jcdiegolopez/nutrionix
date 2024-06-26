'use client'
import { headerLinks } from "@/constants"
import Link from "next/link"
import { usePathname } from "next/navigation"


const NavItems = () => {
    const pathname = usePathname();
    

    /* This code snippet is a functional component in TypeScript React that generates a list of
    navigation items based on the `headerLinks` array. Here's a breakdown of what it does: */
    return (
        <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
            {headerLinks.map((link) => {
                const isActive = pathname === link.route || pathname === link.alternateroute;
                return (
                    <li key={link.route} 
                    className={`${isActive && 'text-malachite-500'} flex-center p-medium-16 whitespace-nowrap`}>
                        <Link href={link.route}>
                            {link.label}
                        </Link> 
                    </li>
                )
            })}
        </ul>
    )
}

export default NavItems