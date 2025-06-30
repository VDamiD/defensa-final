import ModalEmpleado from "./ModalEmpleados";
import { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";

const TablaEmpleados = () => {
  const [empleados, setEmpleados] = useState([]);
  const [show, setShow] = useState(false);
  const [empleadoSeleccionado, setEmpleadoSeleccionado] = useState(null);
  const handleAgregar = () => {
    setEmpleadoSeleccionado(null);
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
    setEmpleadoSeleccionado(null);
  };
  const handleSave = (datos) => {
    if (datos.id) {
      fetch(`http://localhost:3001/empleados/${datos.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos),
      }).then(() => recargar());
    } else {
      fetch("http://localhost:3001/empleados", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos),
      }).then(() => recargar());
    }
  };
  const handleEliminar = (id) => {
    const confirmar = window.confirm("Seguro que vas a eliminar este empleado");
    if (confirmar) {
      fetch(`http://localhost:3001/empleados/${id}`, {
        method: "DELETE",
      }).then(() => recargar());
    }
  };
  const recargar = () => {
    fetch("http://localhost:3001/empleados")
      .then((res) => res.json())
      .then((data) => setEmpleados(data));
  };

  return (
    <>
      <Button variant="success" onClick={handleAgregar} className="mb-3">
        Agregar Empleado
      </Button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Legajo</th>
            <th>Fecha de Alta</th>
            <th>Antiguedad</th>
            <th>Apellido</th>
            <th>Nombre</th>
            <th>Convenio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {empleados.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.legajo}</td>
              <td>{emp.fechaAlta}</td>
              <td>{emp.antiguedad}</td>
              <td>{emp.apellido}</td>
              <td>{emp.nombre}</td>
              <td>{emp.convenio}</td>
              <td>
                <Button
                  variant="warning"
                  size="sm"
                  onClick={() => {
                    setEmpleadoSeleccionado(emp);
                    setShow(true);
                  }}
                  className="me-1"
                >
                  Editar
                </Button>

                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleEliminar(emp.id)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ModalEmpleado
        mostrar={show}
        onCerrar={handleClose}
        onGuardar={handleSave}
        empleadoActual={empleadoSeleccionado}
      />
    </>
  );
};
