'use client'
import React from 'react'
import Card from './_components/Card'
import Title from '@/_components/Title'
import Button, { buttonVariants } from '@/_components/Button'

export const int = 0;
function Counter() {

    const [count, setCount] = React.useState<number>(0)


    const handleIncrement = () => {
        setCount(prev => prev + 1)
    }

    const handleDecrement = () => {
        if (count < 1) return
        setCount(prev => prev - 1)
    }

    return (
        <div className='flex flex-col justify-around items-center h-full'>
            <Title className='text-center'>
                Counter App
            </Title>
            <Card className='min-w-2xs'>
                <Title tag='h2' className='text-center'>
                    count
                </Title>
                <div className='flex gap-2 py-10 justify-center'
                    role="region"
                    aria-labelledby="counter-value">
                    <Button
                        disabled={count < 1}
                        onClick={handleDecrement}
                        aria-label="Decrease count"
                        title="Decrease count"
                    >
                        -
                    </Button>
                    <div
                        className={buttonVariants({ className: 'text-xl', variant: 'grey' })}
                        role="status"
                        aria-live="polite"
                        aria-label={`Current count is ${count}`}
                    >
                        {count}
                    </div>
                    <Button
                        onClick={handleIncrement}
                        aria-label="Increase count"
                        title="Increase count"
                    >
                        +
                    </Button>
                </div>
            </Card>
        </div>
    )
}

export default Counter