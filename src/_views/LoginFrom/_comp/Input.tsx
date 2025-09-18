import { cn, tv } from "@/_utils/tailwind.utils"
import { ComponentProps } from "react"

interface Props extends ComponentProps<'input'> {
    clssName?: string
}

function Input(props: Props) {
    const { className = "", ...rest } = props
    const inputVarirnt = tv({
        base: ["w-full resize-none rounded dark:bg-zinc-900 p-3 text-sm dark:text-zinc-50 dark:placeholder-zinc-500 caret-zinc-50 ",
            "darkoutline-amber-200 border-zinc-400 border focus:border-0"
        ]
    })
    return (
        <input {...rest}
            className={cn(inputVarirnt(), className)}
        />
    )
}

export default Input