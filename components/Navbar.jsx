"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "Home",
        path: '/',
    },
    {
        name: "Projects",
        path: '/projects',
    },
    {
        name: "Resume",
        path: '/resume',
    },
    {
        name: "Contact",
        path: '/contact',
    },
]

function Navbar() {
    const pathname = usePathname();
    return (
        <nav className="flex gap-8">
            {links.map((link, index) => {
                return <Link key={index} href={link.path} className={`${link.path === pathname && 'text-teal-400 border-b-2 border-teal-400'} hover:text-teal-400 transition-all`} >{link.name}</Link>
            })}
        </nav>
    )
}

export default Navbar
