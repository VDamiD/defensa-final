import React, { useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState("");
  const navegar = useNavigate();

  const manejarLogin = (e) => {
    e.preventDefault();
    if (usuario.trim() === "" || contrasena.trim() === "") {
      setError("Todos los campos son obligatorios");
      return;
    }
    setError("");
    console.log("Usuario ingresado", usuario);
    console.log("Contraseña ingresada", contrasena);
    navegar("/productos");
  };
  return (
    <Container style={{ maxWidth: "400px", marginTop: "60px" }}>
      <h2 className="mb-4 text-center">Iniciar sesion</h2>
      {/*mensaje de error*/}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {/* Formulario de Booststrap*/}
      <Form onSubmit={manejarLogin}>
        <Form.Group className="mb-3">
          <Form.Label>Usuario</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: mario1234"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="********"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" variant="dark" className="w-100">
          Iniciar sesion
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
