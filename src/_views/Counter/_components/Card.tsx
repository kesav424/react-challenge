import Title from '@/_components/Title'
import clsx from 'clsx'
import React from 'react'

function Card() {
    return (
        <div className={clsx(["max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"], ['px-4 py-2'])}>
            <Title tag='h2' className='text-center'>
                count
            </Title>
        </div>
    )
}

export default Card