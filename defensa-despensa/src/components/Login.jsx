import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../estilos/Login.css";
import logoViejal from "../assets/logoVieja.png"

function Login({ onClose }) {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [datos, setDatos] = useState([]);

  const navegador = useNavigate();

  useEffect(() => {
    const getUsuarios = async () => {
      try {
        const response = await axios.get("http://localhost:3001/usuarios");
        setDatos(response.data);
      } catch (error) {
        console.error("Error al obtener los usuarios:", error);
      }
    };

    getUsuarios();
  }, []);

  const manejarEnvio = (e) => {
    e.preventDefault();

    const usuarioEncontrado = datos.find(
      (user) =>
        user.usuario.trim().toLowerCase() === usuario.trim().toLowerCase() &&
        user.password === password
    );

    if (usuarioEncontrado) {
      alert("Bienvenido " + usuarioEncontrado.nombre);
      setUsuario("");
      setPassword("");
      navegador('/home');
    } else {
      alert("Ingresó datos incorrectos, por favor no haga enojar a la vieja");
      setPassword("");
    }
  };

  return (
    <div className="modalExterior">
      <div className="modalContenido">
        <button className="modalCerrar" onClick={onClose}>X</button>
        <form className="loginFormulario" onSubmit={manejarEnvio}>
  <img src={logoViejal} alt="Logo La Vieja con Botas" className="logoVieja" />
  <h2>Iniciar sesión</h2>

  <div className="loginCampos">
    <input
      type="text"
      placeholder="Usuario"
      value={usuario}
      onChange={(e) => setUsuario(e.target.value)}
      required
    />
    <input
      type="password"
      placeholder="Contraseña"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
    />
    <button type="submit">Loguear</button>
  </div>
</form>
      </div>
    </div>
  );
}

export default Login;