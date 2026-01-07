import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./assignments/app/routes";


export default function App() {
  return( 
   <BrowserRouter>
   <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route
    path="/todos"
    element={
      <ProtectedRoute>
        <Todos />
      </ProtectedRoute>
    }
    />
   </Routes>
   </BrowserRouter>
   );
}


