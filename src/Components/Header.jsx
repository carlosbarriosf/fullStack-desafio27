import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { FaBars } from 'react-icons/fa'
import MobileMenu from './MobileMenu'

function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)


    return (
        <header className='header container'>
            <div className="header__logo">
                <Link to="/" >Streamcito</Link>
            </div>
            <nav className='header__nav'>
                <Link to="/" className='header__nav-link'>Inicio</Link>
                <Link to="/" className='header__nav-link'>Catálogo</Link>
            </nav>
            <Button 
                type='button'
                action={() => setIsMenuOpen(currentValue => !currentValue)}
                className='header__bars'
                icon={<FaBars />}
            />
            {isMenuOpen ? <MobileMenu action={() => setIsMenuOpen(currentValue => !currentValue)}/> : undefined}
        </header>
    )
}

export default Header