import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../estilos/Carrusel.css';



const Carrusel = () => {
  return (
     <div id="carouselExampleInterval" className="carousel slide custom-carousel" data-bs-ride="carousel">

      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img src="/images/carrusel/imagen1.png" className="d-block w-100" alt="Imagen 1" />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src="/images/carrusel/imagen2.png" className="d-block w-100" alt="Imagen 2" />
        </div>
        <div className="carousel-item">
          <img src="/images/carrusel/imagen3.png" className="d-block w-100" alt="Imagen 3" />
        </div>
        <div className="carousel-item">
          <img src="/images/carrusel/imagen4.png" className="d-block w-100" alt="Imagen 4" />
        </div>
        <div className="carousel-item">
          <img src="/images/carrusel/imagen5.png" className="d-block w-100" alt="Imagen 5" />
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Anterior</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
   
  );
};

export default Carrusel;