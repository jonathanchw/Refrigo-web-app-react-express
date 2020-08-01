import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
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

const App = () => {

  const [itemsLista, setitemsLista] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/db")
      .then((res) => res.json())
      .then((res) => setitemsLista(res))
      .catch((err) => err);

  }, [])



  //render() {


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
        <Route path="/catalogo" render={() => (
          <React.Fragment>
            <Productos lista={itemsLista} />

          </React.Fragment>
        )} />
        <Route path="/servicios" component={Servicios} />
        <Route path="/nosotros" component={Nosotros} />
        <Route path="/contacto" component={Contacto} />





        <Footer />
      </Router>
    </div>


  )
}

export default App;


/*
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>

      </div>
    )
  }
}
*/