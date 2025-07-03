import Card from "react-bootstrap/Card";
import '../estilos/Tarjetas.css'

const Tarjeta = ({ titulo, texto, imagen }) => {
  return (
    
        <Card className="Promociones">
          <Card.Img variant="top" src={imagen} alt={titulo} />
          <Card.Body>
            <Card.Title>{titulo}</Card.Title>
            <Card.Text>{texto}</Card.Text>
          </Card.Body>
        </Card>
       );
};

export default Tarjeta;
