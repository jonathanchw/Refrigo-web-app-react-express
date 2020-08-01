import React from "react";
import "../../App.css";
import Item from "../Item";

const Oferta = ({ oferta }) => {
  const productosOferta = [];

  //verifico si producto tiene key oferta=true
  oferta.map((producto) => {
    return producto.oferta ? productosOferta.push(producto) : null;
  });

  return (
    <div className="contenedor-seccion">
      <h2 className="contenedor-seccion-titulo">
        <span>Ofertas</span>
      </h2>
      <div className="contenedor-seccion-items">
        {productosOferta.map((producto) => (
          <Item key={producto.id}
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
  );
};

export default Oferta;
