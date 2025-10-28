"use client"

import Button from '@/_components/Button'
import Title from '@/_components/Title'
import { cn } from '@/_utils/tailwind.utils'
import { RefreshCcw } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import DigitText from './_component/DigitText'

type TimeProps = {
    hourse: string;
    minutes: string;
    second: string
}

const initalValue: TimeProps = {
    hourse: "00",
    minutes: "00",
    second: "00"
}

function Stopwatch() {
    const [started, setStarted] = useState<boolean>(false)
    const [time, setTime] = useState<TimeProps>(initalValue)
    const [announceText, setAnnounceText] = useState("0 hours and 0 minutes");
    const startBtnTxt = !started ? "Start" : " Stop"
    const intervelRef = useRef<NodeJS.Timeout | null>(null);
    const totalSecondsRef = useRef<number>(0);

    useEffect(() => {

        if (started) {
            intervelRef.current = setInterval(() => {
                const hrsInSec = 3600
                totalSecondsRef.current += 1;
                const hrs = Math.floor((totalSecondsRef.current / hrsInSec));
                const min = Math.floor((totalSecondsRef.current % hrsInSec) / 60);
                const sec = totalSecondsRef.current % 60

                setTime({
                    hourse: String(hrs).padStart(2, "0"),
                    minutes: String(min).padStart(2, "0"),
                    second: String(sec).padStart(2, "0"),
                });

                if (sec === 0) {
                    console.log("hi")
                    setAnnounceText(`${hrs} hours and ${min} minutes`)
                }


            }, 1000);
        }

        return () => {
            if (intervelRef.current) clearInterval(intervelRef.current)
        }
    }, [started])

    function handleStart() {
        setStarted(prev => !prev)

    }

    function handleReset() {
        totalSecondsRef.current = 0;
        setStarted(false);
        setTime(initalValue);
        setAnnounceText("0 hours and 0 minutes");
    }
    return (
        <section>
            <Title tag='h2' className='text-center'> Simple Timer/Stopwatch</Title>
            <div className={cn('max-w-sm min-h-[250px] bg-white border border-gray-200 rounded-lg shadow-sm ',
                'dark:bg-gray-800 dark:border-gray-700 ', 'px-4 py-2 mx-auto my-10',
                'flex flex-col gap-2 justify-around')}>

                <Title tag='h3' className='flex flex-col items-center'>

                    <span className='inline-flex'>
                        Elapsed time:
                    </span>
                    <time
                        dateTime="PT0H0M0S"
                        aria-live='polite'
                        aria-atomic='true'
                        className='inline-flex'
                    >
                        <span aria-hidden="true" className='flex gap-5'>
                            <DigitText id='hourse' value={time.hourse} />
                            <DigitText id='minutes' value={time.minutes} />
                            <DigitText id='seconds' value={time.second} />
                        </span>

                        {/* Screen-reader friendly version (updates once per minute) */}
                        <span className="sr-only opacity-0 pointer-none: order-[0]" >{announceText}</span>
                    </time>

                </Title>

                <div className='flex gap-2.5 justify-around'>
                    <Button
                        id={startBtnTxt}
                        aria-label={`${startBtnTxt} the stopwatch`}
                        variant={!started ? 'default' : 'grey'}
                        onClick={handleStart}
                    >
                        {startBtnTxt}
                    </Button>
                    <Button
                        id="reset"
                        aria-label='reset stopwatch'
                        variant='outline'
                        onClick={handleReset}
                    >
                        <RefreshCcw />
                        Reset
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Stopwatch