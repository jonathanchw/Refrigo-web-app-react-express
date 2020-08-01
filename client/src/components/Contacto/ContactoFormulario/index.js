import React from 'react';
import './style.css';

const ContactoFormulario = ()=> {
  return (
    <div className="contenedor-form">
                    <form action="contacto.js">
                        <label htmlFor="nombre">
                            Nombre:
                            <input id="nombre" name="username" type="text" placeholder="Ingresa tu nombre" required />
                        </label>
                        <label htmlFor="telefono">
                            Telefono:
                            <input id="telefono" name="userphone" type="text" required/>
                        </label>
                        <label htmlFor="email">
                            Email:
                            <input type="text" name="useremail" id="email" required/>
                        </label>
                        <label htmlFor="tipoConsulta">
                            Tipo de Consulta:
                            <input type="text" list="consultas" required/>
                            <datalist id="consultas">
                                <option value="Solicitud de Presupuesto">Solicitud de Presupuesto</option>
                                <option value="Enviar un reclamo">Enviar un reclamo</option>
                                <option value="Enviar una Sugerencia">Enviar una Sugerencia</option>
                                <option value="Otro">Otro</option>
                            </datalist>
                        </label>
                        <label htmlFor="comentario">
                            <textarea name="comentarios" id="comentario" cols="40" rows="10" required></textarea>
                        </label>
                        <input type="submit" value="Enviar"/>
                    </form>
                </div>
  )
};

export default ContactoFormulario;
