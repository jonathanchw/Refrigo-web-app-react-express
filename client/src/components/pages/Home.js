import React from 'react'
import Swiper from 'swiper'
import Novedades from '../Novedades'
import Oferta from '../Oferta'
import Marcas from '../Marcas'
import Newsletter from '../NewsLetter'
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