import React from 'react'
import Carrusel from '../components/Carrusel';
import { useNavigate } from 'react-router-dom';
import AboutUs from '../components/Aboutus';

const Login = () => {
   
  return (
    <>

      <div>
        <AboutUs />
      </div>
<br />
<br />
      <div>
        
        <Carrusel />

      </div>
    
    </>
  )
}

export default Login