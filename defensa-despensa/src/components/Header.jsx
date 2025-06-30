import React from "react";
import { Form, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/logoproyecto.png"
const NavbarDespensa = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img
            src={logo}
            alt="Logo la Vieja con Botas"
            width="40"
            height="40"
            className="me-2 rounded-circle navbar-logo"
            />
            La Vieja con Botas 
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/productos">
                Productos
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default NavbarDespensa;
