// actions

import { nanoid } from "nanoid";
import { type ToDo } from "../_compo/Todo";
import { time } from "console";



//reducer function



export const ACTIONS = {
    ADD_TODO: 'add-to-do',
    DELETE_TODO: 'delete-to-do',
    TOGGLE_TODO: 'toggle-to-do'
} as const

export type Action =
    | { type: typeof ACTIONS.ADD_TODO; payload: { text: string, time: string } }
    | { type: typeof ACTIONS.DELETE_TODO; payload: { id: string } }
    | { type: typeof ACTIONS.TOGGLE_TODO; payload: { id: string } }




export function reducer(todos: ToDo[], actions: Action): ToDo[] {

    switch (actions.type) {
        case ACTIONS.ADD_TODO:
            return [
                ...todos,
                addNewTodo(actions.payload.text, actions.payload.time)
            ]

        case ACTIONS.DELETE_TODO:
            return todos.filter(todo => todo.id !== actions.payload.id)


        case ACTIONS.TOGGLE_TODO:
            return todos.map(todo => (
                todo.id == actions.payload.id
                    ? { ...todo, isChecked: !todo.isChecked }
                    : todo
            ))

        default:
            return todos

    }
}

function addNewTodo(text: string, time: string) {
    return { id: nanoid(), text, time, isChecked: false }
}

