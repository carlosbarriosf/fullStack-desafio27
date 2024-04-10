import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Header from '../Components/Header'
import Catalog from '../pages/Catalog'
import Footer from '../Components/Footer'


function RoutesApp() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/catalog' element={<Catalog />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default RoutesApp