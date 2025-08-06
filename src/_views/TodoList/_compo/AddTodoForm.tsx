import React from 'react'

function AddTodoForm() {
    let unit = ""
    return (
        <form
            className="mb-6 w-full rounded border border-zinc-700 bg-zinc-900 p-3"
        >
            <textarea
                name="FILLTODO"
                id="filltodo"
                placeholder="What do you need to do?"
                aria-label='"What do you need to do?"'
                className="h-24 w-full resize-none rounded bg-zinc-900 p-3 text-sm text-zinc-50 placeholder-zinc-500 caret-zinc-50 focus:outline-0"
            ></textarea>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                    <input
                        type="number"
                        className="w-24 rounded bg-zinc-700 px-1.5 py-1 text-sm text-zinc-50 focus:outline-0"
                    // value={time}
                    // onChange={(e) => setTime(parseInt(e.target.value))}
                    />
                    <button
                        type="button"
                        // onClick={() => setUnit("mins")}
                        className={`rounded px-1.5 py-1 text-xs ${unit === "mins" ? "bg-white text-zinc-950" : "bg-zinc-300/20 text-zinc-300 transition-colors hover:bg-zinc-600 hover:text-zinc-200"}`}
                    >
                        mins
                    </button>
                    <button
                        type="button"
                        // onClick={() => setUnit("hrs")}
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