import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import logoVieja from '../assets/logoVieja.png';
import Login from './Login';
import '../estilos/NavBar.css';

const NavBar = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className="customNavbar">
      <div className="navbarLogo">
        <img src={logoVieja} alt="Logo de la vieja" />
      </div>
      <div className="navbarButton">
        <Button onClick={() => setModal(true)} type="button">Loguear</Button>
      </div>
      {modal && <Login onClose={() => setModal(false)} />}
    </div>
  );
};

export default NavBar;