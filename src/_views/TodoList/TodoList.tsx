'use client'
import Title from '@/_components/Title'
import React, { createContext, useCallback, useReducer, useState } from 'react'
import AddTodoBtn from './_compo/AddTodoBtn'
import AddTodoForm from './_compo/AddTodoForm'
import Todos from './_compo/Todos'
import { todos } from './_data/todos.data'
import { Action, reducer } from './_reducer/todo.reducer'


export const TodoContext = createContext<React.Dispatch<Action>>(() => { })


function TodoList() {
    const [list, dispatch] = useReducer(reducer, todos)
    const [showForm, setShowForm] = useState<boolean>(false)
    const handleClick = useCallback(() => {
        setShowForm(prev => !prev)
    }, [])
    return (
        <section>
            <Title className='text-center'>To-Do list app</Title>
            <TodoContext.Provider value={dispatch}>
                <Todos
                    todos={list}
                />
                <div className=' fixed bottom-5 left-1/2 -translate-x-1/2 w-full p-6 max-w-[500px]'>
                    {
                        showForm && <AddTodoForm />
                    }
                    <AddTodoBtn handleClick={handleClick} />
                </div>
            </TodoContext.Provider>
        </section>
    )
}

export default TodoList