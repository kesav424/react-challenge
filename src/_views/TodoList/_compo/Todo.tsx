'use client'
import { ClockIcon, TrashIcon } from "lucide-react";
import { memo, useContext, useEffect } from "react";
import { TodoContext } from "../TodoList";
import { ACTIONS } from "../_reducer/todo.reducer";
import { cn } from "@/_utils/tailwind.utils";
import { motion, useAnimate, usePresence } from "framer-motion"

export interface ToDo {
    id: string;
    text: string;
    isChecked: boolean;
    time: string;

}
const Todo = (props: ToDo) => {
    const { id, text, isChecked, time } = props
    const dispatch = useContext(TodoContext)
    const [scope, animate] = useAnimate()
    const [ispresent, safeToRemove] = usePresence()



    useEffect(() => {
        if (!ispresent) {
            const initalAimation = async () => {
                animate(
                    "label",
                    {
                        color: isChecked ? "#6ee7b7" : "#fca5a5",
                    },
                    {
                        ease: "easeIn",
                        duration: 0.125,
                    }
                );
                await animate(scope.current, { scale: 1.10, }, { duration: 0.125, ease: "easeIn", })
                await animate(scope.current, { opacity: 0, x: !isChecked ? -25 : 25 }, { delay: 0.10 })
                safeToRemove()
            }
            initalAimation();
        }

    }, [ispresent])

    function handleCheck(id: string) {
        if (!dispatch) return
        dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: id } })
    }

    function removeElement(id: string) {
        if (!dispatch) return
        dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: id } })
    }

    return (
        <motion.div
            layout
            ref={scope}
            // transition={{ type: "spring" }}
            className="relative flex w-full items-center gap-3 rounded border dark:border-zinc-700 dark:bg-zinc-900 p-3"
        >
            <input
                id={text}
                type="checkbox"
                checked={isChecked}
                onChange={() => handleCheck(id)}
                className="size-4 dark:accent-indigo-400"
            />
            <label htmlFor={text}
                className={cn("dark:text-white transition-colors ", isChecked && "dark:text-zinc-400")}
            >
                {text}
            </label>
            <div className="ml-auto flex gap-1.5">
                <div className="flex items-center gap-1.5 whitespace-nowrap bg-zinc-200 rounded dark:bg-zinc-800 px-1.5 py-1 text-xs dark:text-zinc-400">
                    <ClockIcon />
                    <span>{time}</span>
                </div>
                <button
                    onClick={() => removeElement(id)}
                    className="rounded bg-red-300/20 px-1.5 py-1 text-xs text-red-300 transition-colors hover:bg-red-600 hover:text-red-200"
                >
                    <TrashIcon />
                </button>

            </div>
        </motion.div>
    );
};

export default memo(Todo)