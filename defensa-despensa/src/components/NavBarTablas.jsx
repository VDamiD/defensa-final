import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "../estilos/NavBarTablas.css";

const NavBarTablas = () => {
  const navegador = useNavigate();

  return (
    <div className="navbarTablas">
      <Navbar className="w-100 d-flex justify-content-between align-items-center">
        <Button onClick={() => navegador('/home')} type="button">Inicio</Button>
        <Button onClick={() => navegador('/login')} type="button">Salir</Button>
      </Navbar>
    </div>
  );
};

export default NavBarTablas;