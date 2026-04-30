'use client'
import React from 'react'
import Card from './_components/Card'
import Title from '@/_components/Title'
import Button, { buttonVariants } from '@/_components/Button'
import { cn } from '@/_utils/tailwind.utils'
import { AnimatePresence, motion } from 'framer-motion'

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

    React.useEffect(() => {
        const handleKeyUp = (e: KeyboardEvent) => {
            if (e.code == 'Minus') {
                console.log('true')
                handleDecrement();
            } else if (e.code == 'Equal') {
                handleIncrement()
            }
        }

        document.addEventListener('keyup', handleKeyUp)

        return () => {
            document.removeEventListener('keyup', handleKeyUp)
            console.log('event removed')
        }
    }, [count])

    return (
        <div className='flex flex-col justify-around items-center h-full'>
            <Title tag='h2' className='text-center'>
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
                    <div className={cn(buttonVariants(), "relative  overflow-hidden text-center")}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={count}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className=" w-full text-2xl"
                            >
                                {count}
                            </motion.div>
                        </AnimatePresence>
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