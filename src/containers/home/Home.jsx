import React from 'react'
import Header from '../header/Header'
import Ofertas from '../../components/Ofertas/Ofertas'
import Historia from '../../components/Historia/Historia'
import Clientes from '../../components/Clientes/Clientes'
import "./home.css"
import Banner from '../banner/Banner'
import Banner1 from '../banner1/Banner1'
import Banner2 from '../banner2/Banner2'


const Home = () => {
  return (
    <div className='home' id="inicio">
        <Header/>
        <Banner1/>
        <Ofertas/>
        <Banner/>
        <Historia/>
        <Banner2/>
        <Clientes/>
      
      
    </div>
  )
}

export default Home