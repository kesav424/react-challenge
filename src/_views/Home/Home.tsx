import React from 'react'
import { navLinks } from './_data/link.data'
import Link from 'next/link'

function Home() {
    return (

        <div className='flex flex-wrap items-center justify-center w-full'>
            <ol className='text-2xl lg:text-5xl'>
                {
                    navLinks.map((link, index) => (
                        <li key={index} className='hover:text-green-500 transition-colors'>
                            <Link href={link.href}>{link.label}</Link>
                        </li>
                    ))
                }
            </ol>
        </div>

    )
}

export default Home