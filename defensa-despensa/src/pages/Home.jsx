import "../estilos/Home.css"
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Aboutus from "../components/AboutUs";
function Home() {
  const navigate = useNavigate();

  const irAProductos = () => navigate("/productos");
  const irAEmpleados = () => navigate("/empleados");

  return (
    <>
      <Header />
      <div className="container text-center my-5">
        <h1 className="tituloHome">Sistema de gestion de La Vieja con Botas 🍻</h1>

        <div className="mt-4">
          <button onClick={irAProductos} className="btn btn-success m-2">
            Ir a Productos
          </button>
          <button onClick={irAEmpleados} className="btn btn-primary m-2">
            Ir a Empleados
          </button>
        </div>
      </div>
      <Aboutus />
      <Footer />
    </>
  );
}

export default Home;
