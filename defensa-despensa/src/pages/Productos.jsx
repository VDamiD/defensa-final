// 🔹 Importamos React para poder usar JSX (estructura HTML con JS)
import React, { useState, useEffect } from 'react'

// 🔹 Importamos Axios para hacer pedidos al servidor local (JSON Server)
import axios from 'axios'

// 🔹 Creamos el componente Productos
function Productos() {
  // 🔹 Creamos estado para guardar la lista de productos
  const [productos, setProductos] = useState([])

  // 🔹 Creamos estado para guardar los datos nuevos del formulario
  const [nuevo, setNuevo] = useState({
    nombre: '',
    categoria: '',
    precio: '',
    stock: '',
    descripcion: ''
  })

  // 🔹 useEffect sirve para cargar los productos al abrir la página
  useEffect(() => {
    cargarProductos()
  }, [])

  // 🔹 Función para obtener productos del servidor
  const cargarProductos = () => {
    axios.get('http://localhost:3001/productos')
      .then(res => setProductos(res.data))
      .catch(err => console.log(err))
  }

  // 🔹 Función para guardar los cambios que se escriben en los inputs
  const handleChange = (e) => {
    setNuevo({ ...nuevo, [e.target.name]: e.target.value })
  }

  // 🔹 Función para agregar un nuevo producto
  const agregar = () => {
    axios.post('http://localhost:3001/productos', nuevo)
      .then(() => {
        setNuevo({
          nombre: '',
          categoria: '',
          precio: '',
          stock: '',
          descripcion: ''
        })
        cargarProductos()
      })
  }
  
  // 🔹 Función para eliminar un producto por su ID
  const eliminar = (id) => {
    axios.delete(`http://localhost:3001/productos/${id}`)
      .then(() => cargarProductos())
  }

  // 🔹 Función para editar un producto con prompts (como enseñó el profe)
  const editar = (producto) => {
    const nuevoNombre = prompt('Nuevo nombre:', producto.nombre)
    const nuevaCategoria = prompt('Nueva categoría:', producto.categoria)
    const nuevoPrecio = prompt('Nuevo precio:', producto.precio)
    const nuevoStock = prompt('Nuevo stock:', producto.stock)
    const nuevaDescripcion = prompt('Nueva descripción:', producto.descripcion)

    if (
      nuevoNombre && nuevaCategoria &&
      nuevoPrecio && nuevoStock && nuevaDescripcion
    ) {
      axios.put(`http://localhost:3001/productos/${producto.id}`, {
        nombre: nuevoNombre,
        categoria: nuevaCategoria,
        precio: nuevoPrecio,
        stock: nuevoStock,
        descripcion: nuevaDescripcion
      }).then(() => cargarProductos())
    }
  }

  // 🔹 Función para mostrar los datos de 1 producto específico
  const ver = (producto) => {
    alert(`
      Nombre: ${producto.nombre}
      Categoría: ${producto.categoria}
      Precio: ${producto.precio}
      Stock: ${producto.stock}
      Descripción: ${producto.descripcion}
    `)
  }

  return (
    <div className="container">
      <h2 className="my-4">Tabla de Productos</h2>

      {/* 🔹 Formulario simple para agregar nuevo producto */}
      <div className="mb-4">
        <input name="nombre" placeholder="Nombre" value={nuevo.nombre} onChange={handleChange} />
        <input name="categoria" placeholder="Categoría" value={nuevo.categoria} onChange={handleChange} />
        <input name="precio" placeholder="Precio" type="number" value={nuevo.precio} onChange={handleChange} />
        <input name="stock" placeholder="Stock" type="number" value={nuevo.stock} onChange={handleChange} />
        <input name="descripcion" placeholder="Descripción" value={nuevo.descripcion} onChange={handleChange} />
        <button onClick={agregar}>Agregar</button>
      </div>

      {/* 🔹 Tabla que muestra todos los productos */}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((prod) => (
            <tr key={prod.id}>
              <td>{prod.nombre}</td>
              <td>{prod.categoria}</td>
              <td>${prod.precio}</td>
              <td>{prod.stock}</td>
              <td>{prod.descripcion}</td>
              <td>
                <button onClick={() => ver(prod)}>Ver</button>
                <button onClick={() => editar(prod)}>Editar</button>
                <button onClick={() => eliminar(prod.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Productos