import React from 'react'
import './style.css';
import errorImg from '../../assets/ErrorImg/iGotNothin.png'
 const ErrorBusqueda = () =>{
  return (
    <div className='errorBusqueda'>
      <img src={errorImg} alt='error de busqueda'/>
      <p>No hay resultados de tu busqueda</p>
    </div>
  )
}

export default ErrorBusqueda;