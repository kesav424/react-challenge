import { cn } from '@/_utils/tailwind.utils'
import { PlusCircleIcon } from 'lucide-react'
import React, { memo } from 'react'

function AddTodoBtn({ handleClick }: { handleClick: () => void }) {
    return (
        <button
            type='button'
            className={cn(
                ["flex justify-center items-center outline focus:outline-emerald-400",
                    "outline-none border border-indigo-500 rounded-3xl",
                    "px-9 py-4 w-3xs mx-auto",
                    "cursor-pointer",
                    "active:border-indigo-900 text-indigo-500 hover:text-indigo-300",
                    "transition-colors"

                ])}
            onClick={handleClick}
        >
            <PlusCircleIcon />
        </button>
    )
}



export default memo(AddTodoBtn)