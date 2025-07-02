import React from 'react'
import { useNavigate } from 'react-router-dom'
import Tarjeta from '../components/Tarjeta'
import fernetImg from '../assets/fernetbranca.jpeg'
import quilmesImg from '../assets/cervezaquilmes.jpeg'
import picadaImg from '../assets/picada.jpeg'

function Home() {
  const navigate = useNavigate()

  const irAProductos = () => navigate('/productos')
  const irAEmpleados = () => navigate('/empleados')

  return (
    <div className="container text-center my-5">
      <h1 className="mb-4">Super Promos · La Vieja con Botas 🍻</h1>

      <div className="d-flex flex-wrap justify-content-center">
        <Tarjeta
          titulo="Promo Fernet + Coca"
          texto="Fernet Branca + Coca 3L a precio bandeño"
          imagen={fernetImg}
        />
        <Tarjeta
          titulo="Six Pack Quilmes"
          texto="6 Cervezas Quilmes rubias con 10% de descuento"
          imagen={quilmesImg}
        />
        <Tarjeta
          titulo="Picada + Corona"
          texto="Picada para 2 + Six Pack Corona helada como tu ex"
          imagen={picadaImg}
        />
      </div>

      <div className="mt-4">
        <button onClick={irAProductos} className="btn btn-success m-2">Ir a Productos</button>
        <button onClick={irAEmpleados} className="btn btn-primary m-2">Ir a Empleados</button>
      </div>
    </div>
  )
}

export default Home