import React from 'react'
import Title from './Title'
import ThemeSwitcher from './ThemeSwitcher'
import Link from 'next/link'

function Header() {
    return (
        <header className='px-4 py-5 flex items-center justify-around'>
            <Link href={"/"} className='hover:opacity-70'>
                <Title tag='h1' className='text-2xl'>React Challenges</Title>
            </Link>
            <ThemeSwitcher />
        </header>
    )
}

export default Header