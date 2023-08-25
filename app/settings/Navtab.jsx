"use client" 

import { useSelectedLayoutSegment, usePathname } from 'next/navigation'
import Link from 'next/link'


const Navtabs = ({title, path}) => {

    const pathname = useSelectedLayoutSegment();
    const active  = path === pathname 

    return (
        <>
            {active && <div className="absolute bg-zinc-900 rounded-lg w-2.5 h-9 inset-y-0 left-0"></div>}
            <Link href={`/settings/${path}`} className={`flex items-center self-stretch  px-6 my-2 ${active ? "text-zinc-900" : "text-zinc-400"} `}>
                <span className='mr-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10 18.3333C14.6 18.3333 18.3333 14.6 18.3333 10C18.3333 5.4 14.6 1.66667 10 1.66667C5.4 1.66667 1.66666 5.4 1.66666 10C1.66666 14.6 5.4 18.3333 10 18.3333Z" stroke={active ? "#18181B" : "#A1A1AA"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10 13.3333C11.8417 13.3333 13.3333 11.8417 13.3333 10C13.3333 8.15833 11.8417 6.66666 10 6.66666C8.15833 6.66666 6.66666 8.15833 6.66666 10C6.66666 11.8417 8.15833 13.3333 10 13.3333Z" stroke={active ? "#18181B" : "#A1A1AA"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17.6417 6.66667C15.125 6.11667 12.5167 6.11667 10 6.66667" stroke={active ? "#18181B" : "#A1A1AA"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3.29166 5.05L3.30833 5.1C4.15 7.50834 5.44166 9.74167 7.11666 11.6667" stroke={active ? "#18181B" : "#A1A1AA"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9.06667 18.2833C10.7833 16.3917 12.075 14.1583 12.8583 11.7333L12.8833 11.6667" stroke={active ? "#18181B" : "#A1A1AA"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </span>
                <span>{title}</span>
            </Link>
        </>

    )
}

export default Navtabs;