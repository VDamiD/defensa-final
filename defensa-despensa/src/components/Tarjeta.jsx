import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const Tarjeta = () => {
  return (
    <>
      <div>
         <Card style={{ width: '18rem' }}>
      <Card.Img
        variant="top"
        src="https://via.placeholder.com/286x180"
        alt="Imagen de ejemplo"
      />
      <Card.Body>
        <Card.Title>Mi primera tarjeta</Card.Title>
        <Card.Text>
          Esta es una tarjeta de prueba usando React y Bootstrap.
        </Card.Text>
        <Button variant="primary">¡Click acá!</Button>
      </Card.Body>
    </Card>

        </div>  
    </>
  )
}

export default Tarjeta