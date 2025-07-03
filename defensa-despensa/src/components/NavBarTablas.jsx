import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
/*import './NavBarTablas.css';*/

const NavBarTablas = () => {
  return (
    <>
      <div>
            <Navbar className="bg-body-tertiary justify-content-between">
                    <Button type="button">Inicio</Button>
                    <Button type="button">Salir</Button>
            </Navbar>
      </div>
    </>
  )
}

export default NavBarTablas;