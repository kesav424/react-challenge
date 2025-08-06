'use client'
import { ClockIcon, Edit2Icon, TrashIcon } from "lucide-react";

export interface ToDo {
    id: string;
    text: string;
    isChecked: boolean;
    time: string;

}
const Todo = (props: ToDo) => {
    const { id, text, isChecked, time } = props
    //  handleCheck(id)
    return (
        <div
            className="relative flex w-full items-center gap-3 rounded border border-zinc-700 bg-zinc-900 p-3"
        >
            <input
                type="checkbox"
                checked={isChecked}
                onChange={() => { }}
                className="size-4 accent-indigo-400"
            />
            <p
                className={`text-white transition-colors ${isChecked && "text-zinc-400"}`}
            >
                {text}
            </p>
            <div className="ml-auto flex gap-1.5">
                <div className="flex items-center gap-1.5 whitespace-nowrap rounded bg-zinc-800 px-1.5 py-1 text-xs text-zinc-400">
                    <ClockIcon />
                    <span>{time}</span>
                </div>
                <button
                    // onClick={() => removeElement(id)}
                    className="rounded bg-red-300/20 px-1.5 py-1 text-xs text-red-300 transition-colors hover:bg-red-600 hover:text-red-200"
                >
                    <TrashIcon />
                </button>
                <button
                    className="rounded bg-blue-300/20 px-1.5 py-1 text-xs text-blue-300 transition-colors hover:bg-green-600 hover:text-red-200"
                // onClick={() => editElemnt(id)}
                >
                    <Edit2Icon />
                </button>
            </div>
        </div>
    );
};

export default Todo