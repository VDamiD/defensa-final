import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        color: "#9C9273",
        background:
          "linear-gradient(90deg,rgba(87, 0, 174, 0.28) 0%,rgb(28, 28, 28) 100%)",
        borderRadius: "20px",
        margin: "0 auto",
        width: "130%", // Ampliación del ancho
        transform: "translateX(-15%)",
        fontFamily: "Bahnschrift, sans-serif",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
      }}
    >
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Redes Sociales */}
          <div className="col-md-4 mb-3">
            <h5>Seguinos</h5>
            <a
              href="https://www.facebook.com/"
              target="blank"
              className="text-light me-3"
            >
              <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a href="#" className="text-light me-3">
              <i className="fab fa-instagram fa-lg"></i>
            </a>
            <a href="#" color="#9C9273" className="text-light me-3">
              <i className="fab fa-whatsapp fa-lg"></i>
            </a>
          </div>

          {/* Contacto */}
          <div className="col-md-4 mb-3">
            <h5>Contacto</h5>
            <ul className="list-unstyled">
              <li>
                <i className="fas fa-envelope me-2"></i> contacto@lavieja.com
              </li>
              <li>
                <i className="fas fa-phone me-2"></i> +54 381 987-6543
              </li>
              <li>
                <i className="fas fa-map-marker-alt me-2"></i> Yerba Buena,
                Tucumán
              </li>
            </ul>
          </div>

          {/* Enlaces */}
          <div className="col-md-4 mb-3">
            <h5>Enlaces</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-light" />
        <div className="text-center">
          © 2025 <strong>La Vieja con Botas</strong> — Todos los derechos
          reservados
        </div>
      </div>
    </footer>
  );
}
