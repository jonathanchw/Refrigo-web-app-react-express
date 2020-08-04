import React from 'react'
import Swiper from 'swiper'
import Novedades from '../components/Novedades'
import Oferta from '../components/Oferta'
import Marcas from '../components/Marcas'
import Newsletter from '../components/NewsLetter'
const Home = () => {
  return (
    <React.Fragment>
      <Swiper />
      <Novedades />
      <Oferta />
      <Marcas />
      <Newsletter />
    </React.Fragment>
  )
}

export default Home;