import React from "react";
import { TodoProvider } from "./TodoContext";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const Todos = () => {
    return (
        <TodoProvider>
            <div>
                <h2>Todo Application</h2>
                <AddTodo />
                <TodoList />
            </div>
        </TodoProvider>
    );
};

export default Todos;