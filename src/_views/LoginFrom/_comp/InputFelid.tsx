import { cn, tv } from '@/_utils/tailwind.utils'
import React from 'react'


interface InputFormFeildProps {
    className?: string;
    children: React.ReactNode
}

function InputFelid(props: InputFormFeildProps) {
    const { className = "", children } = props;

    const formFelidVarien = tv({
        base: ["flex flex-col  gap-1"]
    })

    return (
        <div className={cn(formFelidVarien(), className)}>
            {
                children
            }
        </div>
    )
}

export default InputFelid