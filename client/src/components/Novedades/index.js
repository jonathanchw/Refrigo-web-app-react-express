import React from "react";

import "../../App.css";
import Item from "../Item";

const Novedades =  ( { novedades }) => {
const itemsNovedad= [];

novedades.map((producto) => {
 return (producto.novedades ? itemsNovedad.push(producto) : null)
});

  return (
    <div className="contenedor-seccion">
      <h2 className="contenedor-seccion-titulo">
        <span>Novedades</span>
      </h2>
      <div className="contenedor-seccion-items">
        {itemsNovedad.map((producto) => (
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
  );
};

export default Novedades;
