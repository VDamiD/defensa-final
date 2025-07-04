import React, { useState, useEffect } from "react";
import axios from "axios";
import HeaderTablas from "../components/HeaderTablas";
import "../estilos/Empleados.css";

function Empleados() {
  const [empleados, setEmpleados] = useState([]);

  const [nuevo, setNuevo] = useState({
    nombre: "",
    puesto: "",
    edad: "",
    email: "",
    horario: ""
  });

  useEffect(() => {
    cargarEmpleados();
  }, []);

  const cargarEmpleados = () => {
    axios
      .get("http://localhost:3001/empleados")
      .then((res) => setEmpleados(res.data))
      .catch((err) => console.log("Error al cargar empleados:", err));
  };

  const handleChange = (e) => {
    setNuevo({ ...nuevo, [e.target.name]: e.target.value });
  };

  const agregar = () => {
    const camposVacios = Object.values(nuevo).some((valor) => valor.trim() === "");
    if (camposVacios) {
      alert("Por favor, completá todos los campos antes de agregar un empleado.");
      return;
    }

    axios
      .post("http://localhost:3001/empleados", nuevo)
      .then(() => {
        setNuevo({
          nombre: "",
          puesto: "",
          edad: "",
          email: "",
          horario: ""
        });
        cargarEmpleados();
      })
      .catch((err) => console.log("Error al agregar empleado:", err));
  };

  const eliminar = (id) => {
    const confirmar = window.confirm("¿Seguro que querés eliminar este empleado? Esta acción no se puede deshacer.");
    if (confirmar) {
      axios
        .delete(`http://localhost:3001/empleados/${id}`)
        .then(() => cargarEmpleados())
        .catch((err) => console.log("Error al eliminar:", err));
    }
  };

  const editar = (empleado) => {
    const nuevoNombre = prompt("Nuevo nombre:", empleado.nombre);
    const nuevoPuesto = prompt("Nuevo puesto:", empleado.puesto);
    const nuevaEdad = prompt("Nueva edad:", empleado.edad);
    const nuevoEmail = prompt("Nuevo email:", empleado.email);
    const nuevoHorario = prompt("Nuevo horario:", empleado.horario);

    if (nuevoNombre && nuevoPuesto && nuevaEdad && nuevoEmail && nuevoHorario) {
      axios
        .put(`http://localhost:3001/empleados/${empleado.id}`, {
          nombre: nuevoNombre,
          puesto: nuevoPuesto,
          edad: nuevaEdad,
          email: nuevoEmail,
          horario: nuevoHorario
        })
        .then(() => cargarEmpleados())
        .catch((err) => console.log("Error al editar:", err));
    }
  };

  const ver = (empleado) => {
    alert(`
      Nombre: ${empleado.nombre}
      Puesto: ${empleado.puesto}
      Edad: ${empleado.edad}
      Email: ${empleado.email}
      Horario: ${empleado.horario}
    `);
  };

  return (
    <>
      <HeaderTablas />
      <div className="container">
        <h2 className="my-4">Empleados</h2>

        <div className="mb-4 d-flex flex-wrap gap-2">
          <input name="nombre" placeholder="Nombre" value={nuevo.nombre} onChange={handleChange} />
          <input name="puesto" placeholder="Puesto" value={nuevo.puesto} onChange={handleChange} />
          <input name="edad" placeholder="Edad" type="number" value={nuevo.edad} onChange={handleChange} />
          <input name="email" placeholder="Email" value={nuevo.email} onChange={handleChange} />
          <input name="horario" placeholder="Horario" value={nuevo.horario} onChange={handleChange} />
          <button className="btn btn-success" onClick={agregar}>
            Agregar empleado
          </button>
        </div>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Puesto</th>
              <th>Edad</th>
              <th>Email</th>
              <th>Horario</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {empleados.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.nombre}</td>
                <td>{emp.puesto}</td>
                <td>{emp.edad}</td>
                <td>{emp.email}</td>
                <td>{emp.horario}</td>
                <td>
                  <button className="btn btn-info btn-sm me-1" onClick={() => ver(emp)}>
                    Ver
                  </button>
                  <button className="btn btn-warning btn-sm me-1" onClick={() => editar(emp)}>
                    Editar
                  </button>
                  <button className="btn btn-danger btn-sm" onClick={() => eliminar(emp.id)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Empleados;