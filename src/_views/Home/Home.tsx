import React from 'react'
import { BASE_URL, navLinks } from './_data/link.data'
import Link from 'next/link'
import { LinkIcon } from 'lucide-react'

function Home() {
    return (

        <div className='flex flex-wrap items-center justify-center w-full'>
            <ol className='text-2xl lg:text-3xl'>
                {
                    navLinks.map((link, index) => (
                        <li key={index} className='hover:text-green-500 transition-colors flex gap-2 items-center'>
                            <LinkIcon className='text-amber-400' />
                            <Link href={BASE_URL + link.href}>{link.label}</Link>
                        </li>
                    ))
                }
            </ol>
        </div>

    )
}

export default Home