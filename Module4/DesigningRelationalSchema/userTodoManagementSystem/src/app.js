import express from "express";
import UserRoutes from "./routes/user.routes.js";
import todoRoutes from "./routes/todo.routes.js;"

const app = express();

app.use(express.json());
app.use("/api/users", UserRoutes);
app.use("/api/users", todoRoutes);

export default app;