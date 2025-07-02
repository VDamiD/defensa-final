import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Empleados() {
  const [empleados, setEmpleados] = useState([])

  const [nuevo, setNuevo] = useState({
    nombre: '',
    puesto: '',
    edad: '',
    email: '',
    horario: ''
  })

  useEffect(() => {
    cargarEmpleados()
  }, [])

  const cargarEmpleados = () => {
    axios.get('http://localhost:3001/empleados')
      .then(res => setEmpleados(res.data))
      .catch(err => console.log(err))
  }

  const handleChange = (e) => {
    setNuevo({ ...nuevo, [e.target.name]: e.target.value })
  }

  const agregar = () => {
    axios.post('http://localhost:3001/empleados', nuevo)
      .then(() => {
        setNuevo({
          nombre: '',
          puesto: '',
          edad: '',
          email: '',
          horario: ''
        })
        cargarEmpleados()
      })
  }

  const eliminar = (id) => {
    axios.delete(`http://localhost:3001/empleados/${id}`)
      .then(() => cargarEmpleados())
  }

  const editar = (empleado) => {
    const nuevoNombre = prompt('Nuevo nombre:', empleado.nombre)
    const nuevoPuesto = prompt('Nuevo puesto:', empleado.puesto)
    const nuevaEdad = prompt('Nueva edad:', empleado.edad)
    const nuevoEmail = prompt('Nuevo email:', empleado.email)
    const nuevoHorario = prompt('Nuevo horario:', empleado.horario)

    if (
      nuevoNombre && nuevoPuesto &&
      nuevaEdad && nuevoEmail && nuevoHorario
    ) {
      axios.put(`http://localhost:3001/empleados/${empleado.id}`, {
        nombre: nuevoNombre,
        puesto: nuevoPuesto,
        edad: nuevaEdad,
        email: nuevoEmail,
        horario: nuevoHorario
      }).then(() => cargarEmpleados())
    }
  }

  const ver = (empleado) => {
    alert(`
      Nombre: ${empleado.nombre}
      Puesto: ${empleado.puesto}
      Edad: ${empleado.edad}
      Email: ${empleado.email}
      Horario: ${empleado.horario}
    `)
  }

  return (
    <div className="container">
      <h2 className="my-4">Tabla de Empleados</h2>

      <div className="mb-4">
        <input name="nombre" placeholder="Nombre" value={nuevo.nombre} onChange={handleChange} />
        <input name="puesto" placeholder="Puesto" value={nuevo.puesto} onChange={handleChange} />
        <input name="edad" placeholder="Edad" type="number" value={nuevo.edad} onChange={handleChange} />
        <input name="email" placeholder="Email" value={nuevo.email} onChange={handleChange} />
        <input name="horario" placeholder="Horario" value={nuevo.horario} onChange={handleChange} />
        <button onClick={agregar}>Agregar</button>
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
                <button onClick={() => ver(emp)}>Ver</button>
                <button onClick={() => editar(emp)}>Editar</button>
                <button onClick={() => eliminar(emp.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Empleados