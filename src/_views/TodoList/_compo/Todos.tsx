import Todo, { ToDo } from "./Todo";



const Todos = ({ todos }: { todos: ToDo[] }) => {

    return (
        <div className="w-full space-y-3 max-w-3xl mx-auto mt-10">
            {
                todos.map(todos => <Todo key={todos.id} {...todos} />)
            }
        </div>
    );
};

export default Todos
