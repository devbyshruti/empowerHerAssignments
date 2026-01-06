import {  useState } from "react";
import { Card, CardContent, CardHeader, Cardtitle } from "@components/ui/card"
import { input } from "@components/ui/input";
import { Checkbox } from "@components/ui/ckeckbox";
import { Button } from "@components/ui/button";

export default function TodoList() {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    const addTodo = () => {
        if (todo.trim() === "") return;
        setTodo([...todos, { text: todo, completed: false }]);
        setTodo("");
    }

    const toggleTodo = (index) => {
        const updateTodos = [...todos];
        updateTodos[index].completed = !updateTodos[index].completed;
        setTodos(updateTodos)
    };

   return (
        <Card className="max-w-md mx-auto mb-10">
            <CardHeader>
                <Cardtitle>Todo List</Cardtitle>
            </CardHeader>

            <CardContent>
               <div className="fex gap-2 mb-4">   
                 <input
                 placeholder="Add a todo"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                />
            
                <Button onClick={addTodo}>Add</Button>
             </div> 
            </CardContent>
            </Card>
);

}