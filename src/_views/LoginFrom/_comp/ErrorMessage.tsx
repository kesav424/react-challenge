import React from 'react'
import { motion } from "framer-motion"

interface ErrorMessageProps {
    id: string;
    children: React.ReactNode
}

const framer_error = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
    transition: { duration: 0.2 },
}

function ErrorMessage(props: ErrorMessageProps) {
    return (
        <motion.p className='text-red-500'
            id={props.id}
            {...framer_error}
        >
            {props.children}
        </motion.p>
    )
}

export default ErrorMessage