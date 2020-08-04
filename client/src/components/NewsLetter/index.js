import React from 'react'
import './style.css';
import sobre from '../../assets/sobre.jpg'


const Newsletter = () => {
    return (
        <div className="newsletter">
            <img src={sobre} alt="sobre" />
            <div className="info-newsletter">
                <h3>Sumate a nuestro newsletter</h3>
                <form className="suscribite" action="#">
                    <p>Recibi en tu mail todas las promos y novedades</p>
                    <label >
                        <input className="suscribite-text" type="text" placeholder="Introduce tu email.." />
                        <input className="suscribite-boton" type="button" value="Enviar" />
                    </label>
                </form>
            </div>
        </div>
    )
}

export default Newsletter;