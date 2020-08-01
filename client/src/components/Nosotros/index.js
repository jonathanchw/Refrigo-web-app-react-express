import React from 'react'
import './style.css'
import NosotrosComponentOne from './NosotrosComponent_one';
import NosotrosComponentTwo from './NosotrosComponent_two';
import Banner from './Banner';

const Nosotros= ()=> {
  return (
    <div>
      <Banner/>
      <NosotrosComponentOne />
      <NosotrosComponentTwo />
    </div>
  )
}

export default Nosotros;