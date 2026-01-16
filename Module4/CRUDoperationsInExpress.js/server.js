import { count } from "console";
import express from "express";
import fs from "fs";

const app = express();

const PORT = 4000;

app.use(express.json());

app.get("/students", (req,res)=>{
    const data = fs.readFileSync("./db.json", "utf-8");
    const parsedData = JSON.parse(data);

    res.json(parsedData.students);
});

app.post("/students",(req,res) => {
    const { id, name, course, year} = req.body;

    if(!id || !name || !course || !year) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }
});

const data = fs.readFileSync("./db.json", "utf-8");
const parsedData = JSON.parse(data);

parsedData.students.push({ id, name, course, year });
fs.writeFileSync("./db.json", JSON.stringify(parsedData, null, 2));

res.json({
    message: "Student added successfully"
});

app.put("/students", (req, res) => {
    const { id, naem, course, year } = req.body;

    const data = fs.readFileSync("./db.json","utf-8")
    const parsedData = JSON.parse(data);

    const student = parsedData.students.find(s => s.id === id);
})
app.listen(PORT, ()=>{
    console.log("Server is running")
})
