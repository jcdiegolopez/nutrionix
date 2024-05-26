import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"

import Image from "next/image"
import NavItems from "./NavItems"
  

/**
 * The MobileNav component in TypeScript React renders a mobile navigation menu with a menu icon, logo,
 * and navigation items.
 * @returns A `MobileNav` component is being returned. It consists of a navigation bar that is hidden
 * on medium-sized screens (`md:hidden`). The navigation bar includes a `Sheet` component with a
 * trigger (`SheetTrigger`) that displays a menu icon (`menu.svg`). When the menu icon is clicked, a
 * sheet content (`SheetContent`) is displayed with a logo image (`logo.png`), a separator,
 */
const MobileNav = () => {
  return (
    <nav className="md:hidden ">
        <Sheet>
        <SheetTrigger className="align-middle">
            <Image src={"/assets/icons/menu.svg"}
             alt="menu" width={24} height={24} className="cursor-pointer"/>
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
            <Image src={"/assets/images/logo.png"} alt="Nutrionix logo" width={50} height={50} />
            <Separator className="border border-gray-50" />
            <NavItems />
        </SheetContent>
        </Sheet>

    </nav>
  )
}

export default MobileNav