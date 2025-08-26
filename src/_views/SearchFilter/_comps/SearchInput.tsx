'use client'
import { cn } from '@/_utils/tailwind.utils'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { ChangeEvent, useState } from 'react'

function SearchInput() {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter();
    const [text, setText] = useState<string>(searchParams.get('query') ?? "")


    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const value = event.target.value
        setText(value)
        const params = new URLSearchParams(searchParams)
        if (value) {
            params.set('query', value)
        } else {
            params.delete('query')
        }
        replace(`${pathname}?${params.toString()}`)
    }

    return (
        <input
            // defaultValue={searchParams.get('query')?.toString()}
            id="search"
            type='search'
            aria-label='serach here..'
            value={text}
            placeholder='serach here..'
            className={
                cn(
                    ["p-2"],
                    [
                        "bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg "
                    ],
                    [
                        "dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    ])
            }
            onChange={handleChange}
        >
        </input >
    )
}

export default SearchInput