import TodoList from '@/_views/TodoList/TodoList'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "To-do list App",
    description: "To-do list App using usereducer provider",
};

function page() {
    return (
        <TodoList />
    )
}

export default page