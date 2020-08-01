import React from "react";
import "./style.css";

const Item = ({ img, precio, descripcion, categoria, novedades, oferta }) => {
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


  return (
    <div className="contenedor-item">
      <img src={img} alt="item" />
      <p>{categoria}</p>
      <strong className="title-art-reciente">{notificacionNovedad}</strong>
      <h3>{precio}$</h3>
      <p>{descripcion}</p>
      <div className={toogleClaseOfferta}>
        <span>{showOferta}</span>
      </div>
    </div>
  );
}

export default Item;
