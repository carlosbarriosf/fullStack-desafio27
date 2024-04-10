import React from 'react'
import { Link } from 'react-router-dom'

function Card({id, image, title}) {
  return (
    <div className='card'>
        <div className='card__image-container'>
            <Link to={`/detail/${id}`}>
                <img src={image} alt={`Portada de la película ${title}`} />
            </Link>
        </div>
    </div>
  )
}

export default Card