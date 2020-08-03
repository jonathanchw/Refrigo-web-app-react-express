import React from 'react';
import './style.css';
import ContactoFormulario from './ContactoFormulario';
import ContactoMap from './ContactoMap';


const Contacto = () => {
  return (
    <div className="contenido-contacto">
      <ContactoFormulario />
      <ContactoMap />
    </div>
  )
}
export default Contacto;
