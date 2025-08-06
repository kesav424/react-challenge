import { nanoid } from "nanoid";
import { ToDo } from "../_compo/Todo";


export const todos: ToDo[] = [

    {
        id: nanoid(),
        text: "Take out trash",
        isChecked: false,
        time: "5 mins",
    },
    {
        id: nanoid(),
        text: "Do laundry",
        isChecked: false,
        time: "10 mins",
    },
    {
        id: nanoid(),
        text: "Have existential crisis",
        isChecked: true,
        time: "12 hrs",
    },
    {
        id: nanoid(),
        text: "Get dog food",
        isChecked: false,
        time: "1 hrs",
    }
]