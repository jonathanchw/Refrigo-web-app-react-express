import React from 'react'
import './style.css'
import noblex from '../../assets/marcas_img/noblex.png';
import tecumseh from '../../assets/marcas_img/tecumseh.png';
import sanyo from '../../assets/marcas_img/sanyo.png';
import copeland from '../../assets/marcas_img/copeland.png';
import westric from '../../assets/marcas_img/westric.png';
import samsung from '../../assets/marcas_img/samsung.png';
import generalelectric from '../../assets/marcas_img/generalelectric.png';
import '../../App.css'


const Marcas = () => {
  return (
    <div className="contenedor-marcas">
        <h2 className="contenedor-seccion-titulo">
          <span>
          Nuestras marcas
          </span>
          </h2>
      <div className="contenedor-marcas-items">
        <div className="contenedor-marcas-items">
          <img src={noblex} alt="marca noblex" />
          <img src={tecumseh} alt="marca tecumseh" />
          <img src={sanyo} alt="marca sanyo" />
          <img src={copeland} alt="marca copeland" />
          <img src={westric} alt="marca westric" />
          <img src={samsung} alt="marca samsung" />
          <img src={generalelectric} alt="marca General electric" />

        </div>
      </div>

    </div>
  )
};


export default Marcas