import Tarjeta from "../components/Tarjeta";
import fernet from "../assets/fernetbranca.jpeg";
import quilmes from "../assets/cerveza quilmes.jpeg";
import picada from "../assets/picada.jpeg";
const Productos = () => {
  const promociones = [
    {
      titulo: "Oferta Fernet",
      texto:
        "Las mejores ofertas de Fernet en tu despensa de confiaza La Vieja con Botas",
      imagen: fernet,
    },
    {
      titulo: "Oferta Quilmes",
      texto:
        "Las Cervezas mas frias las encontras en tu despensa ya sabes la Vieja con Botas",
      imagen: quilmes,
    },
    {
      titulo: "Ofertas picadas",
      texto:
        "Queres bajonear algo y tomarte una cheve en la Vieja con Botas tenemos lo que esstas buscando",
      imagen: picada,
    },
  ];
  return (
    <>
      <div style={{ display: "flex", gap: "1rem", padding: "2rem" }}>
        {promociones.map((promo, index) => (
          <Tarjeta
            key={index}
            titulo={promo.titulo}
            texto={promo.texto}
            imagen={promo.imagen}
          />
        ))}
      </div>
    </>
  );
};

export default Productos;
