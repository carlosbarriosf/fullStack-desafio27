import React from 'react'
import { Link } from 'react-router-dom'

function MobileMenu({action}) {
  return (
    <div className='mobileMenu'>
        <Link className='mobileMenu__link' onClick={action}>Inicio</Link>
        <Link className='mobileMenu__link' onClick={action}>Catálogo</Link>
    </div>
  )
}

export default MobileMenu