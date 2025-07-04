import { useState } from 'react';
import "../estilos/AboutUs.css" // Asegurate de que esta ruta exista y el archivo también

function AboutUs() {
  const [mostrarImagen, setMostrarImagen] = useState(false);

  return (
    <div className="aboutUsContenedor">
      <button className="aboutus-button" onClick={() => setMostrarImagen(true)}>
        Nosotros
      </button>

      {mostrarImagen && (
        <>
          <div
            className="aboutus-overlay"
            onClick={() => setMostrarImagen(false)}
          ></div>

          <div
            className="aboutus-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src="/images/aboutus/imagen1.png"
              alt="Sobre nosotros"
              className="aboutus-img"
            />
            <div className="text-center mt-3">
              <button
                className="btn btn-danger"
                onClick={() => setMostrarImagen(false)}
              >
                Cerrar
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default AboutUs;