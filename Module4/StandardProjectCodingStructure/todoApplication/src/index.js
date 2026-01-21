import express from "express";
import todoRoutes from "./routes/todo.routes.js"
import { errorHandler } from "./middlewares/error.middleware.js";

const app = express();
const PORT = 3000;
app.use(express.json());
app.use("/todos", todoRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});