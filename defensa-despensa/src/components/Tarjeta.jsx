import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
const Tarjeta = ({ titulo, texto, imagen }) => {
  return (
    <>
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={imagen} alt={titulo} />
          <Card.Body>
            <Card.Title>{titulo}</Card.Title>
            <Card.Text>{texto}</Card.Text>
            <Button variant="primary">¡Click acá!</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Tarjeta;
