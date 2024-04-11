import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'

function Home() {
  return (
    <div className='container home'>
      <p className='home__description'>
        Bienvenidos a <span className='home__description-brand'>Streamcito</span>, donde la magia del cine cobra vida. 
        Descubre una amplia selección de películas, desde clásicos atemporales hasta 
        los últimos estrenos. ¡Sumérgete en el mundo del entretenimiento cinematográfico 
        con nosotros!
      </p>
      <Link to="/catalog" className='home__catalog'>Ir al catálogo</Link>
      <Footer />
    </div>
  )
}

export default Home