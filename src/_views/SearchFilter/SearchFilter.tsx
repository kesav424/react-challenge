import React from 'react'
import SearchInput from './_comps/SearchInput'
import SearchList from './_comps/SearchList'
import Title from '@/_components/Title'

function SearchFilter() {
    return (
        <section>
            <Title tag='h2' className='text-center'>Search filter 🔎</Title>
            <div className='flex flex-col max-w-3xs mx-auto mt-10'>
                <SearchInput />
                <SearchList />
            </div>
        </section>
    )
}

export default SearchFilter