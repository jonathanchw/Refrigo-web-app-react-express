import React from "react";
import { Link } from 'react-router-dom';
import "./style.css";

const Item = ({ img, precio, descripcion, categoria, novedades, oferta, id }) => {
  let notificacionNovedad = "";
  let toogleClaseOfferta = "";
  let showOferta = "";
  if (novedades) {
    notificacionNovedad = "Articulo Reciente"
  };
  if (oferta) {
    toogleClaseOfferta = "offerSign";
    showOferta = "oferta";
  };
  const itemUrlId = `/catalogo/${id}`;

  return (
    <div className="contenedor-item">
      <Link to={itemUrlId} className='itemLink'>
        <img src={img} alt="item" />
        <p>{categoria}</p>
        <strong className="title-art-reciente">{notificacionNovedad}</strong>
        <h3>{precio}$</h3>
        <p>{descripcion}</p>
        <div className={toogleClaseOfferta}>
          <span>{showOferta}</span>
        </div>
      </Link>
    </div>
  );
}

export default Item;
