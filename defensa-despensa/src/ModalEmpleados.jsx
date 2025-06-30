import { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const ModalEmpleado = ({ mostrar, onCerrar, onGuardar, empleadoActual }) => {
  const [formData, setFormData] = useState({
    legajo: "",
    fechaAlta: "",
    antiguedad: "",
    apellido: "",
    nombre: "",
    convenio: ""
  });

  // Al abrir el modal con un empleado seleccionado, cargamos los datos
  useEffect(() => {
    if (empleadoActual) {
      setFormData(empleadoActual);
    } else {
      setFormData({
        legajo: "",
        fechaAlta: "",
        antiguedad: "",
        apellido: "",
        nombre: "",
        convenio: ""
      });
    }
  }, [empleadoActual]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onGuardar(formData);
    onCerrar(); // Cerramos el modal después de guardar
  };

  return (
    <Modal show={mostrar} onHide={onCerrar}>
      <Modal.Header closeButton>
        <Modal.Title>{empleadoActual ? "Editar" : "Agregar"} Empleado</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {["legajo", "fechaAlta", "antiguedad", "apellido", "nombre", "convenio"].map((campo) => (
            <Form.Group className="mb-3" key={campo}>
              <Form.Label>{campo.charAt(0).toUpperCase() + campo.slice(1)}</Form.Label>
              <Form.Control
                type="text"
                name={campo}
                value={formData[campo]}
                onChange={handleChange}
              />
            </Form.Group>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCerrar}>Cancelar</Button>
        <Button variant="primary" onClick={handleSubmit}>Guardar</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalEmpleado;