import express from "express";

const app = express();
const PORT = 3000;

app.get("/home", (req,res)=>{
    res.json({
        message: "This is home page"
    });
});

app.get("/contactus", (req,res)=>{
    res.json({
        email: "contact@contact.com"
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});