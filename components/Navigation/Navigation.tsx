'use client'

import Link from 'next/link';

import {
    Search,
    Notifications,
} from '@mui/icons-material';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Links = [
    {url: '/' , label: 'Home'},
    {url: '/Series' , label: 'Series'},
    {url: '/Movies' , label: 'TV Shows'},
    {url: '/newPopular' , label: 'New & Popular'},
    {url: '/myList' , label: 'My List'},
    {url: '/bLanguages' , label: 'Browse by Languages'},
]

export default function Navigation () {

    const [isScrolled , setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 0) {
                setIsScrolled(true)
            }else {
                setIsScrolled(false)
            }
        }
        window.addEventListener('scroll' , handleScroll)
    }, [])

    return(
        <header className={`${isScrolled && 'bg-[#141414]'} fixed top-0 z-50 w-screen`}>
            <nav className='pt-5 px-10 flex flex-row justify-between h-16'>
                <ul className='flex gap-4 items-center'>
                    <li>
                        <Image 
                            src="/netflix-logo.png"
                            alt="netflix"
                            width={100}
                            height={100}
                            priority={true}
                            quality={100}
                            className='object-contain'
                        />
                    </li>
                    {
                    
                    Links.map((link) => (
                        <li key={link.label} className='hidden md:flex'>
                            <Link href={link.url} className='text-xs lg:text-sm text-white cursor-pointer transition duration-[.4s] hover:text-[#b3b3b3]'>
                                {link.label}
                            </Link>
                        </li>
                    ))
                }

                </ul>
                <div className='flex flex-row items-center gap-4'>
                    <Search />
                    <Notifications />
                    <Image
                        src="/user.png"
                        width={30}
                        height={30}
                        alt=""
                        className='cursor-pointer rounded'
                    />
                </div>
            </nav>
            {/* com */}
        </header>
    )
}