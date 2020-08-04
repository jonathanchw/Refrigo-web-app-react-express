import React from 'react'
import './style.css';
import Item from '../Item';
//import {useRouteMatch} from 'react-router-dom'; 

const Productos = ({ lista }) => {
 
  return (
    
    <div className="contenedor-seccion">
      <h2 className="contenedor-seccion-titulo">
        <span>Productos</span>
      </h2>
      <div className="contenedor">
        {lista.map(producto => (
          <Item key={producto.id}
            id={producto.id}
            img={producto.imgUrl}
            precio={producto.precio}
            descripcion={producto.nombre}
            categoria={producto.nombreCategoria}
            oferta={producto.oferta}
            novedades={producto.novedades}
          />
        ))}

      </div>
    </div>
  )
};

export default Productos;
