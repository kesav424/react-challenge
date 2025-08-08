'use client'
import { ClockIcon, TrashIcon } from "lucide-react";
import { useContext } from "react";
import { TodoContext } from "../TodoList";
import { ACTIONS } from "../_reducer/todo.reducer";
import { cn } from "@/_utils/tailwind.utils";

export interface ToDo {
    id: string;
    text: string;
    isChecked: boolean;
    time: string;

}
const Todo = (props: ToDo) => {
    const { id, text, isChecked, time } = props
    const dispatch = useContext(TodoContext)
    function handleCheck(id: string) {
        if (!dispatch) return
        dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: id } })
    }

    function removeElement(id: string) {
        if (!dispatch) return
        dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: id } })
    }
    return (
        <div
            className="relative flex w-full items-center gap-3 rounded border border-zinc-700 bg-zinc-900 p-3"
        >
            <input
                type="checkbox"
                checked={isChecked}
                onChange={() => handleCheck(id)}
                className="size-4 accent-indigo-400"
            />
            <p
                className={cn("text-white transition-colors ", isChecked && "text-zinc-400")}
            >
                {text}
            </p>
            <div className="ml-auto flex gap-1.5">
                <div className="flex items-center gap-1.5 whitespace-nowrap rounded bg-zinc-800 px-1.5 py-1 text-xs text-zinc-400">
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
        </div>
    );
};

export default Todo