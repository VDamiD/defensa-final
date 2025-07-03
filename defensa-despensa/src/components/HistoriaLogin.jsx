import logoVieja from "../assets/logoVieja.png";
import "../estilos/HistoriaLogin.css";

const HistoriaLogin = () => {
  return (
    <div className="historiaContainer">
      <div className="historiaHeader">
        <img
          src={logoVieja}
          alt="Logo de las botas de la vieja"
          className="imagenHistoria"
        />
        <div className="parrafoHistoria">
          <h2>NUESTRA HISTORIA</h2>
        </div>
      </div>
      <div className="parrafoHistoria">
        <p>
          Corría el año 1998 cuando doña Eulogia, apodada cariñosamente “La Vieja con Botas” por sus infaltables borcegos negros incluso en verano, decidió abrir una pequeña despensa en el barrio San Javier de Yerba Buena. El local, improvisado en el garaje de su casa, tenía apenas tres estantes, una balanza antigua y un corazón dispuesto a sostener al barrio con lo poco que había.
          <br /><br />
          Al principio, el camino fue cuesta arriba. La competencia de los supermercados grandes, la falta de proveedores estables y un corte de luz que arruinó toda la mercadería refrigerada fueron solo algunas de las pruebas. Pero la despensa no se detuvo. Al contrario: cada golpe sirvió para fortalecer su raíz vecinal.
          <br /><br />
          Con los años, el negocio fue pasando de generación en generación. Su hija Lila, una contadora con alma de comerciante, fue quien incorporó el primer sistema de inventario en Excel. Luego, los nietos —Lucas y Micaela— trajeron aire fresco y digitalizaron por completo el local, incluso sumando delivery por WhatsApp.
          <br /><br />
          Hoy, “La Vieja con Botas” es mucho más que una despensa: es un símbolo del barrio. El mural pintado en su fachada, con una mujer de mirada fuerte y botas de charol, recuerda a todos que detrás de cada paquete de yerba y salamín, hay una historia de coraje, identidad y trabajo familiar.
          <br /><br />
          Y aunque Eulogia ya no está detrás del mostrador, su espíritu sigue vivo en cada cliente que cruza la puerta y en cada mate compartido entre góndolas.
        </p>
      </div>
    </div>
  );
};

export default HistoriaLogin;