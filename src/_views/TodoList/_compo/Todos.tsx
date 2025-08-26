import Title from "@/_components/Title";
import Todo, { ToDo } from "./Todo";
import { CircleCheckBig } from "lucide-react";
import { AnimatePresence } from "framer-motion";



const Todos = ({ todos }: { todos: ToDo[] }) => {
    return (
        todos.length > 0 ?
            (<div className="w-full space-y-3 max-w-3xl mx-auto mt-10 pb-32">

                <AnimatePresence mode="popLayout">
                    {todos.map((todo) => (
                        <Todo key={todo.id} {...todo} />
                    ))}
                </AnimatePresence>

            </div>)
            : (
                <Title tag="h2" className="text-center flex gap-2.5 items-center justify-center dark:text-red-600 text-red-600">
                    <>
                        <span>
                            <CircleCheckBig />
                        </span>
                        <span>List is empty</span>
                    </>
                </Title>
            )
    );
};

export default Todos
