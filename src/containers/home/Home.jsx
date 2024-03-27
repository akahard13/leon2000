import React, {useEffect} from 'react'
import Header from '../header/Header'
import Ofertas from '../../components/Ofertas/Ofertas'
import Historia from '../../components/Historia/Historia'
import Clientes from '../../components/Clientes/Clientes'
import "./home.css"
import Banner from '../banner/Banner'
import Banner1 from '../banner1/Banner1'
import Banner2 from '../banner2/Banner2'
import Footer from '../../components/footer/Footer'
import { useLocation } from 'react-router-dom';


const Home = () => {
  const location = useLocation();
  useEffect(() => {

    if (location.hash == '#ofertas') {
      const element = document.getElementById('ofertas');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    if (location.hash == '#clientes') {
      const element = document.getElementById('clientes');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    if (location.hash == '#historia') {
      const element = document.getElementById('historia');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    if (location.hash == '#inicio') {
      const element = document.getElementById('inicio');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);
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