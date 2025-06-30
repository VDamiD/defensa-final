import { useState } from 'react';

function AboutUs() {
  const [mostrarImagen, setMostrarImagen] = useState(false); //Se utiliza un ESTADO, con un modal

  return (
    <div>
      <button className="btn btn-primary" onClick={() => setMostrarImagen(true)}
          style={{
    backgroundColor: '#9C27B0',          // Morado eléctrico
    color: '#fff',                       // Texto blanco
    padding: '24px 38px',                // Tamaño generoso
    fontSize: '30px',                    // Letra más grande
    fontFamily: 'Segoe UI, sans-serif', // Tipografía moderna
    border: 'none', 
    borderRadius: '50px', // Bordes redondeados
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
    cursor: 'pointer',
    transition: 'transform 0.2s ease'
  }}
  onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
  onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}>
        Nosotros
      </button>

      {mostrarImagen && ( // Acá se configura la imagen  
        <div
          style={{
            position: 'fixed',
            top: '10%',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 0 15px rgba(50, 39, 39, 0.4)',
            zIndex: 9999
          }}
        >
          <img src="/images/aboutus/imagen1.png" alt="Sobre nosotros" className="img-fluid" style={{ maxWidth: '500px' }} />

          <div className="text-center mt-3">
            <button className="btn btn-danger" onClick={() => setMostrarImagen(false)}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AboutUs;
