import { Routes, Route } from "react-router-dom";
import TodoList from "./assignments/Axios/pages/TodoList";
import TodoDetails from "./assignments/Axios/pages/TodoDetails";


function App() {
  return(
    <Routes>  
     <Route path="/" element={<TodoList />} />
      <Route path="/todo/:id" element={<TodoDetails />} />
    </Routes>
    
   );
}

export default App;
