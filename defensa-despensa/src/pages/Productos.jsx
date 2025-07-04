import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeaderTablas from '../components/HeaderTablas';
import '../estilos/Productos.css';

function Productos() {
  const [productos, setProductos] = useState([]);

  const [nuevo, setNuevo] = useState({
    nombre: '',
    categoria: '',
    precio: '',
    stock: '',
    descripcion: ''
  });

  useEffect(() => {
    cargarProductos();
  }, []);

  const cargarProductos = () => {
    axios.get('http://localhost:3001/productos')
      .then(res => setProductos(res.data))
      .catch(err => console.log("Error al cargar productos:", err));
  };

  const handleChange = (e) => {
    setNuevo({ ...nuevo, [e.target.name]: e.target.value });
  };

  const agregar = () => {
    const camposVacios = Object.values(nuevo).some(valor => valor.trim() === '');
    if (camposVacios) {
      alert("Por favor, completá todos los campos antes de agregar un producto.");
      return;
    }

    axios.post('http://localhost:3001/productos', nuevo)
      .then(() => {
        setNuevo({
          nombre: '',
          categoria: '',
          precio: '',
          stock: '',
          descripcion: ''
        });
        cargarProductos();
      })
      .catch(err => console.log("Error al agregar producto:", err));
  };

  const eliminar = (id) => {
    const confirmar = window.confirm("¿Estás seguro de que querés eliminar este producto?");
    if (confirmar) {
      axios.delete(`http://localhost:3001/productos/${id}`)
        .then(() => cargarProductos())
        .catch(err => console.log("Error al eliminar producto:", err));
    }
  };

  const editar = (producto) => {
    const nuevoNombre = prompt('Nuevo nombre:', producto.nombre);
    const nuevaCategoria = prompt('Nueva categoría:', producto.categoria);
    const nuevoPrecio = prompt('Nuevo precio:', producto.precio);
    const nuevoStock = prompt('Nuevo stock:', producto.stock);
    const nuevaDescripcion = prompt('Nueva descripción:', producto.descripcion);

    if (nuevoNombre && nuevaCategoria && nuevoPrecio && nuevoStock && nuevaDescripcion) {
      axios.put(`http://localhost:3001/productos/${producto.id}`, {
        nombre: nuevoNombre,
        categoria: nuevaCategoria,
        precio: nuevoPrecio,
        stock: nuevoStock,
        descripcion: nuevaDescripcion
      }).then(() => cargarProductos())
        .catch(err => console.log("Error al editar producto:", err));
    }
  };

  const ver = (producto) => {
    alert(`
      Nombre: ${producto.nombre}
      Categoría: ${producto.categoria}
      Precio: $${producto.precio}
      Stock: ${producto.stock}
      Descripción: ${producto.descripcion}
    `);
  };

  return (
    <>
      <HeaderTablas />
      <div className="container">
        <h2 className="my-4">Productos</h2>

        <div className="mb-4 d-flex flex-wrap gap-2">
          <input name="nombre" placeholder="Nombre" value={nuevo.nombre} onChange={handleChange} />
          <input name="categoria" placeholder="Categoría" value={nuevo.categoria} onChange={handleChange} />
          <input name="precio" placeholder="Precio" type="number" value={nuevo.precio} onChange={handleChange} />
          <input name="stock" placeholder="Stock" type="number" value={nuevo.stock} onChange={handleChange} />
          <input name="descripcion" placeholder="Descripción" value={nuevo.descripcion} onChange={handleChange} />
          <button className="btn btn-success" onClick={agregar}>Agregar producto</button>
        </div>

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
                  <button className="btn btn-info btn-sm me-1" onClick={() => ver(prod)}>Ver</button>
                  <button className="btn btn-warning btn-sm me-1" onClick={() => editar(prod)}>Editar</button>
                  <button className="btn btn-danger btn-sm" onClick={() => eliminar(prod.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Productos;