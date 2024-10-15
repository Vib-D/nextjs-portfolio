"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import Navbar from "./Navbar";
import MobileNav from './MobileNav';
import { usePathname } from "next/navigation";

const links = [
    {
        name: "Hire",
        path: '/hire',
    },
]

function Header() {
    const pathname = usePathname();
    return (
        <header className="py-8 xl:py12 text-white" >
            <div className="container mx-auto flex justify-between items-center">
                {/*Logo */}
                <Link href='/' >
                    <h1 className="text-4xl font-semibold" >
                        Vibhor<span className="text-teal-400" >.</span>
                    </h1>
                </Link>


                {/* Nav */}
                <div className="hidden xl:flex items-center gap-8">
                    <Navbar />
                    <Link href={links[0].path}> {/* Access the first item in links array */}
                        <Button
                            className={`hover:bg-teal-900 hover:text-teal-100 border border-teal-400 ${pathname === links[0].path ? 'bg-teal-900 text-teal-100' : ''
                                }`}
                        >
                            Hire me.
                        </Button>
                    </Link>
                </div>

                {/* Mobile nav */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}

export default Header
