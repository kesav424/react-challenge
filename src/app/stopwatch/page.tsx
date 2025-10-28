import Stopwatch from '@/_views/Stopwatch/Stopwatch'
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: "simple Timer/Stopwatch",
    description: "simple Timer/Stopwatch",
};

function page() {
    return (
        <Stopwatch />
    )
}

export default page