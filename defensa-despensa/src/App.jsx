import "./App.css";
import Login from "./pages/Login";
import Productos from "./pages/Productos";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/productos" element={<Productos />} />
      </Routes>
    </>
  );
}

export default App;
