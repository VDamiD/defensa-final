import "./App.css";
import Login from "./pages/Login";
import Productos from "./pages/Productos";
import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home"
import Empleados from "./pages/Empleados"

function App() {
  return (
    
      
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<MainLayout/>}>
        <Route path="home" element={<Home/>}/>
        <Route path="/productos" element={<Productos />} />
        <Route path="empleados" element={<Empleados/>} />
        </Route>
      </Routes>
   
  );
}

export default App;