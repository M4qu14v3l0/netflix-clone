'use client'

import Link from 'next/link';


import {
    Search,
    Notifications,

} from '@mui/icons-material';
import Image from 'next/image';


const Links = [
    {url: '/' , label: 'Home'},
    {url: '/Series' , label: 'Series'},
    {url: '/Movies' , label: 'TV Shows'},
    {url: '/newPopular' , label: 'New & Popular'},
    {url: '/myList' , label: 'My List'},
    {url: '/bLanguages' , label: 'Browse by Languages'},
]

export default function Navigation () {
    return(
        <header>
            <nav className='pt-5 px-10 flex flex-row justify-between h-16'>
                <ul className='flex gap-4 items-center'>
                    <li>
                        <Image 
                            src="/netflix-logo.png"
                            alt="netflix"
                            width={120}
                            height={120}
                            priority={true}
                            quality={100}
                        />
                    </li>
                    {
                    Links.map((link) => (
                        <li key={link.label} >
                            <Link href={link.url} className='text-white cursor-pointer transition duration-[.4s] hover:text-[#b3b3b3]'>
                                {link.label}
                            </Link>
                        </li>
                    ))
                }
                </ul>
                <div className='flex flex-row items-center gap-4 '>
                    <Search />
                    <Notifications />
                </div>
            </nav>
        </header>
    )
}