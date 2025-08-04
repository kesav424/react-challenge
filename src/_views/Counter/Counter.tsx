
import React from 'react'
import Card from './_components/Card'
import Title from '@/_components/Title'

function Counter() {
    return (
        <div className='flex flex-col justify-around items-center h-full'>
            <Title className='text-center'>
                Counter App
            </Title>
            <Card />
        </div>
    )
}

export default Counter