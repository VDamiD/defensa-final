import Card from "react-bootstrap/Card";


const Tarjeta = ({ titulo, texto, imagen }) => {
  return (
    
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={imagen} alt={titulo} />
          <Card.Body>
            <Card.Title>{titulo}</Card.Title>
            <Card.Text>{texto}</Card.Text>
          </Card.Body>
        </Card>
       );
};

export default Tarjeta;
