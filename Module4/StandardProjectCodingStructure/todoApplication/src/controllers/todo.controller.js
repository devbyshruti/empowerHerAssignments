import { readDB, writeDB } from "../models/todo.model.js";

export const getTodos = (req, res, next) => {
    try {
        const db = readDB();
        res.status(200).json(db.todos);
    } catch (error) {
        next(error);
    }
};

export const addTodo = (req, res, next) => {
    try {
        const { title, completed = false } = req.body;

        if (!title) {
            return res.status(400).json({ message: "Title is required" });
        }
        const db = readDB();

        const  newTodo = {
            id: Date.now(),
            title,
            completed
        };

        db.todos.push(newTodo);
        writeDB(db);

        res.status(201).json({
            message: "Todo created successfully",
            todo: newTodo
        });
    } catch (error) {
        next(error);
    }
};

export const updateTodo = (req, res, next) => {
    try {
        const { id } = req.params;
        const db = readDB();

        const todoIndex = db.todos.findIndex(t => t.id == id);

        if (todoIndex === -1) {
            return res.status(404).json({ message: "Todo not found"});
        }

        db.todos[todoIndex] = {
            ...db.todos[todoIndex],
            ...req.body
        };

        writeDB(db);
        res.status(200).json(db.todos[todoIndex]);
    } catch (error) {
        next(error);
    }
};

export const deleteTodo = (req, res, next) => {
    try {
        const { id } = req.params;
        const db = readDB();

        const filteredTodos = db.todos.filter(t => t.id != id);


        if (filteredTodos.length === db.todos.length) {
            return res.status(404).json({ message: "Todo not found" });
        }
        db.todos = filteredTodos;
        writeDB(db);

       res.status(200).json({ message: "Todo deleted successfully" });
    } catch (error) {
        next(error);
    }
};