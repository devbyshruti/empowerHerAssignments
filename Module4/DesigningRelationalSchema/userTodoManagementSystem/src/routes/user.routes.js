import express from "express";
import { createUser, deleteUser } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/signup", createUser);
router.delete("/:id", deleteUser);

export default router;