import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import logoVieja from "../assets/logoVieja.png";
import "../estilos/NavBarHome.css";
import { useNavigate } from "react-router-dom";
const NavBarHome = () => {
  const navegador = useNavigate();
  const irLogin = () => navegador("/login");
  return (
    <Navbar className="customNavbarHome">
      <div className="navbarLogoHome">
        <img src={logoVieja} alt="Logo de la vieja" />
      </div>
      <div className="navbarButtonHome">
        <Button onClick={irLogin} type="button">Salir</Button>
      </div>
    </Navbar>
  );
};

export default NavBarHome;
