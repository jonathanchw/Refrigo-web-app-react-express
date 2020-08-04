import React from 'react';
import './style.css';
import NosotrosComponent_one_img from '../../../assets/nosotros_img/imagenArticle1.jpg'

const NosotrosComponent_one = () => {
  return (
    <div className="article1">
      <div className="article1Title_p">
        <h2>Exportadores de las mejores marcas.</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptates tempore et officiis alias est
        unde
        voluptatum tempora, totam accusamus distinctio officia pariatur quae iste facere, iure quasi placeat.
        Culpa
        maiores dolores mollitia aspernatur. Natus modi, quibusdam id est provident voluptatibus. Commodi
        temporibus
        quibusdam ratione facere iure inventore illum doloremque. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Mollitia cumque minima optio modi voluptatem aliquam nulla perferendis culpa neque
        ipsum?</p>
      </div>
      <img src={NosotrosComponent_one_img} alt="Contenedores de productos al aire libre" />
    </div>
  )
}

export default NosotrosComponent_one;