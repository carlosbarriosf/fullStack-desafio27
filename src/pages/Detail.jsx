import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieById } from '../assets/api'

function Detail() {

    const { id } = useParams()
    const [movie, setMovie] = useState()

    useEffect(() => {
        getMovieById(id).then(data => {
            setMovie(data)
            console.log('data recieved', data)
        }).catch(err => console.error(err))
    }, [id])

    console.log(movie)

    return (
        <div className='detail container'>
            {movie && (
                <div>
                    <div className='movieOverview'>
                        <img className='movieOverview__image' src={movie.image} alt={`Portada de la película ${movie.title}`} />
                        <p className='movieOverview__rating'>Rating: {movie.rating}</p>
                    </div>
                    <div className='movieDescription'>
                        <p className='movieDescription__title'>{movie.title}</p>
                        <p className='movieDescription__year'>Año: {movie.year}</p>
                        <p className='movieDescription__director'>Director: {movie.director}</p>
                        <p className='movieDescription__genre'>Género: {movie.genre}</p>
                        <p className='movieDescription__description'>Sinopsis: {movie.description}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Detail