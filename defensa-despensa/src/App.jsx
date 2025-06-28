import { useState } from 'react'

import './App.css'
import Login from './pages/Login'
import Tarjeta from './components/Tarjeta'
 
function App() {
  

  return (
    <>
      <Login/>
      <hr />
      <br />
      <br />
      <div style={{ display: 'flex', gap: '1rem', padding: '2rem' }}>
        <Tarjeta/>
        <Tarjeta/>
        <Tarjeta/>
      </div>
    </>
  )
}

export default App
