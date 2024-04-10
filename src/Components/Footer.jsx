import React from 'react'
import Button from './Button'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='footer container'>
        <p className='footer__copyright'>Streamcito 2024. Todos los derechos reservados</p>
        <div className='footer__socialMedia'>
            <Link to="https://www.instagram.com" target='blank'>
                <Button
                    type='button'
                    className='footer__icon'
                    icon={<FaInstagram />}
                />
            </Link>
            <Link to="https://www.facebook.com" target='blank'>
                <Button
                    type='button'
                    className='footer__icon'
                    icon={<FaFacebookF />}
                />
            </Link>
            <Link to="https://twitter.com" target='blank'>
                <Button
                    type='button'
                    className='footer__icon'
                    icon={<FaXTwitter />}
                />
            </Link>
        </div>
    </footer>
  )
}

export default Footer