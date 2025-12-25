import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TodoDetails = () => {
    const { todoId } = useParams();
    const [todo, setTodo] = useState(null);

    useState(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
        .then((res) => res.json())
        .then((data) => setTodo(data));

    }, [todoId]);

    if(!todo) return <p>Loading...</p>;

    return (
        <div>
            <h3>Todo Details</h3>
            <p>Id: {todo.id}</p>
            <p>Title: {todo.title}</p>
            <p>Status: {todo.completed ? "Completed" : "Not Completed"}</p>

        </div>
    );
};
export default TodoDetails;