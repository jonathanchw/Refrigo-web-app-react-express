import React from 'react';
import { Link } from 'react-router-dom'
import './style.css';

const Nav = () => {
    return (
        <nav className="navbar">
            <div className="cabeceraBotton">
                <ul className="navegacion">
                    <li className="navegacion-items"><Link to="/">Inicio</Link></li>
                    <li className="navegacion-items"><Link to="/Catalogo">Catálogo</Link></li>
                    <li className="navegacion-items"><Link to="/servicios">Servicios</Link></li>
                    <li className="navegacion-items"><Link to="/Nosotros">Nosotros</Link></li>
                    <li className="navegacion-items"><Link to="/Contacto">Contacto</Link></li>
                    <div className="boton-buscar">
                        <input id="motrarBuscador" className="buscador" type="search" name="buscar"
                            placeholder="Buscar.." />
                        <button id="botonBuscar" className="fas fa-search" href="#buscar"></button>
                    </div>
                </ul>
            </div>
        </nav>
    )
};


export default Nav;
