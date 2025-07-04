import HistoriaLogin from "./HistoriaLogin";
import Carrusel from "./Carrusel";
import Tarjeta from "./Tarjeta";
import fernet from "../assets/fernetbranca.jpeg";
import quilmes from "../assets/cervezaquilmes.jpeg";
import picada from "../assets/picada.jpeg";
import vodkatofka from "../assets/vodkatofka.jpg"
import campari from "../assets/campari.jpg"
import vodka from "../assets/vodka.jpg"
import "../estilos/Main.css";


const Main = () => {
  return (
    <div className="main-layout">
      <div className="content-grid">
        {/* Columna izquierda */}
        <div className="col-izquierda">
          <HistoriaLogin />
        </div>

        {/* Columna derecha */}
        <div className="col-derecha">
          
          <Carrusel />
          <br /><br /><br /><br /><br /><br /><br /><br />
          <div className="tarjetasSuperior">
            <Tarjeta
              titulo="Promo Fernet + Coca"
              texto="Fernet Branca + Coca 3L a precio bandeño"
              imagen={fernet}
            />
            <Tarjeta
              titulo="Six Pack Quilmes"
              texto="6 Cervezas Quilmes rubias con 10% de descuento"
              imagen={quilmes}
            />
            <Tarjeta
              titulo="Picada + Corona"
              texto="Picada para 2 + Six Pack Corona helada como tu ex"
              imagen={picada}
            />
          </div>
          <br /> <br/> <br/> <br/> <hr />
          <div className="tarjetasInferior">
            <Tarjeta
              titulo="Promo Fernet + Coca"
              texto="Fernet Branca + Coca 3L a precio bandeño"
              imagen={vodkatofka}
            />
            <Tarjeta
              titulo="Six Pack Quilmes"
              texto="6 Cervezas Quilmes rubias con 10% de descuento"
              imagen={campari}
            />
            <Tarjeta
              titulo="Picada + Corona"
              texto="Picada para 2 + Six Pack Corona helada como tu ex"
              imagen={vodka}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;