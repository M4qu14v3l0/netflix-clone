'use client'

import Link from 'next/link';

import {
    Search,
    Notifications,

} from '@mui/icons-material';


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
                    <li><h1 className='text-red-600 font-semibold text-2xl'>Netflix</h1></li>
                    {
                    Links.map((link) => (
                        <li key={link.label}>
                            <Link href={link.url}>
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