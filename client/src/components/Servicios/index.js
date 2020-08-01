import React from 'react';
import './style.css';
import imagenServicios1 from '../../assets/servicios_img/imagenservicios1.png';
import imagenServicios2 from '../../assets/servicios_img/imagenservicios2.png';

const Servicios = () => {
  return (
    <div className="contenido-principal">
      <div className="contenedor-servicios">
        <div className="contenedor-servicios-text">
          <h1>Reparaciones y Servicios a domicilio.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam possimus nostrum ducimus beatae
          sunt molestias corrupti placeat facilis, accusantium, cumque amet, itaque minima! Nisi sit ad asperiores
          est cumque iusto eos numquam quaerat nulla exercitationem, fugit laudantium quidem excepturi, officia
          consectetur dolor inventore illo odit. In enim sapiente fugit aut facilis porro officiis est, optio ex
          suscipit beatae ad ducimus obcaecati expedita eos, cumque blanditiis quisquam vel quo assumenda rerum.
          Accusamus doloribus amet iusto. In maxime labore non beatae quibusdam debitis nam excepturi accusamus
          officia? Earum fuga eius perspiciatis labore, odio, vel ea asperiores sed aperiam, neque dolor officia!
          eniam atque, tempora dicta sequi, voluptates ullam eligendi nisi. Perferendis, facilis!</p>
          <div className="servicio-contact">
            <span>Telefono:
            <strong>25 4521 6145
              </strong>
              <a className="btn-whatsapp"
                href="#"
                target="blank">
                <svg className="WsIcon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24" height="24"
                  viewBox="0 0 24 24">
                  <path
                    d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>
            </span>{<br/>}
            <span>Email: <a className="contacto-servicio" href="#whatapp">MichaelScott@Refrigo.com</a></span>
          </div>

        </div>
        <div className="contenedor-servicios-multimedia">
          <div className="contenedor-video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/rtSXa1ebQA4?start=300" frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>

          </div>
          <div className="contenedor-img-servicios">
            <img src={imagenServicios1}
              alt="Hombre con casco naranja operando maquinaria de construccion"/>
              <img src={imagenServicios2} alt="Mujer con casco amarillo en taller reparando motor de auto"/>

        </div>
      </div>
          </div>

        </div>
  )
}
export default Servicios;
