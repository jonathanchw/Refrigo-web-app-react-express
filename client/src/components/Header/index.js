import React from 'react';
import {Link} from 'react-router-dom';
import './style.css'
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <div className="header">
      <div className="cabecera">
        <div className="cabeceraTop">
          <div className="containerBotonHamburguesa">
            <button id="boton" aria-label="Abrime" className="menuHamburguesa"><svg
              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" /></svg>
            </button>
          </div>

          <div className="cabecera-logo">
            <Link to="/">
              <img className="logo" src={logo} alt="Ir a la home" />
            </Link>
          </div>
          <a className="boton-ingresar" href="#ingresar">
            <i className="fas fa-user"></i>
          </a>
        </div>
      </div>
    </div>
  )
}
export default Header;
