import React from 'react';
import './style.css';
import NosotrosComponent_two_img from '../../../assets/nosotros_img/imagenArticle2.jpg';

const NosotrosComponent_two = () => {
  return (
    <div className="article2">
      <div className="article1Title_p">
        <h2>Atención y servicio de primera calidad</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ipsum reprehenderit est sed mollitia saepe.
        Nesciunt dignissimos, blanditiis facilis, quia incidunt laudantium accusantium eum molestiae tenetur debitis
        quasi sapiente quos fugiat nam delectus magni? Nihil iure ea nostrum at unde nisi, assumenda ipsam
        blanditiis
        exercitationem, nobis inventore, dolores nesciunt fugiat voluptatem. Inventore vel id, non tenetur corporis
        impedit voluptatum, asperiores aut voluptatem dolorem placeat, at similique esse dicta laudantium quidem.
    </p>
      </div>
      <img src={NosotrosComponent_two_img} alt="Almacen vacio, camion" />

    </div>
  )
}

export default NosotrosComponent_two;