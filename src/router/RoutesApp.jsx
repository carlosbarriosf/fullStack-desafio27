import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Header from '../Components/Header'
import Catalog from '../pages/Catalog'
import Detail from '../pages/Detail'


function RoutesApp() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/detail/:id' element={<Detail />} />
        </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp