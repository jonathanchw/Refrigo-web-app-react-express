import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Nav = () => {
    const [buscador, setBuscador] = useState("");
    const handleChange = (event) => { setBuscador(event.target.value); }
    const ruta = `/buscar/${buscador}`

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
                            placeholder="Buscar.." value={buscador.value} onChange={handleChange} />
                        <Link to={ruta}>
                            <button id="botonBuscar" className="fas fa-search" ></button>
                        </Link>
                    </div>
                </ul>
            </div>
        </nav>
    )
};

export default Nav;

