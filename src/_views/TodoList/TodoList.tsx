import Title from '@/_components/Title'
import React from 'react'
import AddTodoBtn from './_compo/AddTodoBtn'
import AddTodoForm from './_compo/AddTodoForm'
import Todos from './_compo/Todos'
import { todos } from './_data/todos.data'


function TodoList() {
    return (
        <section>
            <Title className='text-center'>To-Do list app</Title>
            <Todos
                todos={todos}
            />
            <div className=' fixed bottom-5 left-1/2 -translate-x-1/2 w-full p-6 max-w-[500px]'>
                <AddTodoForm />
                <AddTodoBtn />
            </div>
        </section>
    )
}

export default TodoList