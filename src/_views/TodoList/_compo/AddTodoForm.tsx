'use client'
import React, { FormEvent, useContext, useState } from 'react'
import { Action, ACTIONS } from '../_reducer/todo.reducer'
import { TodoContext } from '../TodoList'

function AddTodoForm() {
    const [unit, setUnit] = useState<"mins" | 'hrs'>("hrs")
    const dispatch = useContext(TodoContext)

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const text = formData.get('todotext');
        const time = formData.get('time');
        console.log(time)
        if (!text || !time) return
        dispatch({ type: ACTIONS.ADD_TODO, payload: { text: text.toString(), time: time + unit } })
        console.log('app dispatched')
    }

    const handleSetUnits = (unit: "mins" | 'hrs') => {
        return () => setUnit(unit);
    }
    return (
        <form
            className="mb-6 w-full rounded border border-zinc-700 bg-zinc-900 p-3"
            onSubmit={handleSubmit}
        >
            <textarea
                name="todotext"
                id="filltodo"
                placeholder="What do you need to do?"
                aria-label='"What do you need to do?"'
                className="h-24 w-full resize-none rounded bg-zinc-900 p-3 text-sm text-zinc-50 placeholder-zinc-500 caret-zinc-50 focus:outline-0"
                required
            ></textarea>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                    <input
                        defaultValue={'1'}
                        name='time'
                        type="number"
                        className="w-24 rounded bg-zinc-700 px-1.5 py-1 text-sm text-zinc-50 focus:outline-0"
                        required
                    />
                    <button
                        type="button"
                        onClick={handleSetUnits("mins")}
                        className={`rounded px-1.5 py-1 text-xs ${unit === "mins" ? "bg-white text-zinc-950" : "bg-zinc-300/20 text-zinc-300 transition-colors hover:bg-zinc-600 hover:text-zinc-200"}`}
                    >
                        mins
                    </button>
                    <button
                        type="button"
                        onClick={handleSetUnits("hrs")}
                        className={`rounded px-1.5 py-1 text-xs ${unit === "hrs" ? "bg-white text-zinc-950" : "bg-zinc-300/20 text-zinc-300 transition-colors hover:bg-zinc-600 hover:text-zinc-200"}`}
                    >
                        hrs
                    </button>
                </div>

                <button
                    type="submit"
                    className="rounded bg-indigo-600 px-1.5 py-1 text-xs text-indigo-50 transition-colors hover:bg-indigo-500"
                >
                    Submit
                </button>
            </div>


        </form>
    )
}

export default AddTodoForm