import express from "express";
import {
    addTodo,
    getUsersTodos,
    updateTodo,
    deleteTodo
} from "../controllers/todo.controller.js";

const router = express.Router();

router.post("/add-todo", addTodo);
router.get("/get-my-todo/:userId", getUserTodos);
router.get("/update-todo/:todoId", deleteTodo);

export default router;