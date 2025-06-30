import "./App.css";
import Login from "./pages/Login";
import Productos from "./pages/Productos";
import { Routes, Route, Navigate } from "react-router-dom";
import NavbarDespensa from "./components/NavbarDespensa";

function App() {
  return (
    <>
      <NavbarDespensa />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/productos" element={<Productos />} />
      </Routes>
    </>
  );
}

export default App;