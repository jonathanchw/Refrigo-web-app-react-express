import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, useParams } from 'react-router-dom';
import "./App.css";

import Header from "./components/Header";
import Nav from "./components/Nav";
import Productos from "./components/Productos";
import Carousel from "./components/Swiper";
import Novedades from "./components/Novedades";
import Oferta from "./components/Oferta";
import Marcas from "./components/Marcas";
import Newsletter from "./components/NewsLetter";
import Footer from "./components/Footer";
import Servicios from "./components/Servicios";
import Nosotros from "./components/Nosotros";
import Contacto from "./components/Contacto";
import ErrorBusqueda from "./components/Errorbusqueda";




const App = () => {
  const [itemsLista, setitemsLista] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9000/db")
      .then((res) => res.json())
      .then((res) => setitemsLista(res))
      .catch((err) => err);
  }, [])



  //Crear componente Interna con esto!!!!
  const Interna = ({ itemsLista }) => {

    const { id } = useParams();
    const producto = itemsLista.filter(itemSelec => itemSelec.id == id);
    if (!producto || !producto.length) return null;

    return (
      <Productos lista={producto} />
    )
  };
  ////-------------------------------


  //Crear componente Busqueda con esto!!!!
  const Busqueda = ({ itemsLista }) => {
    const { termino } = useParams();
    const articulos = itemsLista.filter(
      itemSelec => {
        const regex = new RegExp(termino, 'gi');
        return regex.test(itemSelec.nombre)
      });
    if (!articulos || !articulos.length) return (
      <ErrorBusqueda />
    );
    return (
      <Productos lista={articulos} />
    )
  };
  //----------------------------------

  return (
    <div className="App">
      <Router>
        <Header />
        <Nav />
        <Route exact path='/' render={() => (
          <React.Fragment>
            <Carousel />
            <Novedades novedades={itemsLista} />
            <Oferta oferta={itemsLista} />
            <Marcas />
            <Newsletter />
          </React.Fragment>
        )
        } />
        <Route exact path="/catalogo" render={() => (
          <Productos lista={itemsLista} />
        )} />
        <Route path="/catalogo/:id" >
          <Interna itemsLista={itemsLista} />
        </Route>
        <Route path="/buscar/:termino" >
          <Busqueda itemsLista={itemsLista} />
        </Route>
        <Route path="/servicios" component={Servicios} />
        <Route path="/nosotros" component={Nosotros} />
        <Route path="/contacto" component={Contacto} />
        <Footer />
      </Router>
    </div>
  )
}
export default App;


