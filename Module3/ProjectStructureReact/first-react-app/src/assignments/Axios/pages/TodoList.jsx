import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTodos } from "../api/todoService";

function TodoList() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
       getTodos()
       .then((res) => setTodos(res.data))
       .catch((err) => console.error(err));
    }, []);

    return (
        <div>
            <h2>Todo List</h2>

            {todos.map((todo) => (
                <div key={todo.id}>
                    <Link to={`/todo/${todo.id}`}>
                    <p>
                        <strong>{todo.title}</strong> -{" "}
                        {todo.completed ? "Completed": "Pending"}
                    </p>
                    </Link>
                    </div>
            ))}
        </div>
    );
}

export default TodoList;