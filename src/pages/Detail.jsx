import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getMovies } from '../assets/api'
import Footer from '../Components/Footer'
// import { getMovieById } from '../assets/api'

function Detail() {

    const { id } = useParams()
    const [movie, setMovie] = useState()

    useEffect(() => {
        getMovies(`movies/${id}`).then(data => {
            setMovie(data)
        }).catch(err => console.error(err))
    }, [id])


    return (
        <div className='detail container'>
            {movie && (
                <>
                    <h2 className='movie__title'>{movie.title}</h2>
                    <div className='movie'>
                        <div className='movieOverview'>
                            <img className='movieOverview__image' src={movie.image} alt={`Portada de la película ${movie.title}`} />
                            <p className='movieOverview__rating'>Rating: {movie.rating}</p>
                        </div>
                        <div className='movieDescription'>
                            <div className='item subtitle'>Año</div>
                            <div className='movieDescription__year item'>{movie.year}</div>
                            <div className='item subtitle'>Género</div>
                            <div className='movieDescription__genre item'>{movie.genre.join(' ')}</div>
                            <div className='item subtitle'>Sinopsis</div>
                            <div className='movieDescription__description item'>{movie.description}</div>
                        </div>
                    </div>
                    <Link to="/catalog" className='back'>Volver al catálogo</Link>
                    <Footer />
                </>
            )}
        </div>
    )
}

export default Detail