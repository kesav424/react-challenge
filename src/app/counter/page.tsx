import Counter from '@/_views/Counter/Counter'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Counter App",
    description: "Counter App using useState",
};
const page = () => {
    return (
        <Counter />
    )
}

export default page