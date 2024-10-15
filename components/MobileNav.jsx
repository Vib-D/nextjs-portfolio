"use client"

import { Sheet, SheetContent, SheetTrigger } from '../components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci'
import { Button } from './ui/button';

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

const MobileNav = () => {
    const pathname = usePathname();
  return (
    <Sheet>
        <SheetTrigger className='flex justify-center items-center' >
            <CiMenuFries className='text-[32px] text-teal-400' />
        </SheetTrigger>
        <SheetContent className='flex flex-col' >
            {/* Logo */}
            <div className='mt-32 mb-40 text-center text-2xl' >
                <Link href='/' >
                    <h1 className='text-4xl font-semibold' >
                        Vibhor<span className='text-teal-400' >.</span>
                    </h1>
                </Link>
            </div>
            <nav className='flex flex-col justify-center items-center gap-8' >
                {links.map((link, index) => {
                    return (
                        <Link className={ `${link.path === pathname && 'text-teal-400 border-b-2 border-teal-400'} text-2xl hover:text-teal-400 transition-all`} href={link.path} key={index} >
                            {link.name}
                        </Link>
                    )
                })}
                <Link href='/hire'>
                    <Button className='hover:bg-teal-900 hover:text-teal-100 border border-teal-400' >Hire me.</Button>
                </Link>
            </nav>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav
