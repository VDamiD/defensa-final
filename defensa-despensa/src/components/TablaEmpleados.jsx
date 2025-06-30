import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";

const TablaEmpleados = () => {
  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/empleados")
      .then((res) => res.json())
      .then((data) => setEmpleados(data))
      .catch((error) => console.error("Error al obtener empleados:", error));
  }, []);

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Cargo</th>
          <th>Email</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {empleados.map((empleado) => (
          <tr key={empleado.id}>
            <td>{empleado.id}</td>
            <td>{empleado.nombre}</td>
            <td>{empleado.cargo}</td>
            <td>{empleado.email}</td>
            <td>
              <button className="btn btn-info btn-sm me-1">Ver</button>
              <button className="btn btn-warning btn-sm me-1">Editar</button>
              <button className="btn btn-danger btn-sm">Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TablaEmpleados;