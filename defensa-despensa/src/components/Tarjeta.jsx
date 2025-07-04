import "../estilos/Promociones.css";

const Tarjeta = ({ titulo, texto, imagen }) => {
  return (
    <div className="Promociones">
      <img src={imagen} alt={titulo} />
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">{texto}</p>
      </div>
    </div>
  );
};

export default Tarjeta;
