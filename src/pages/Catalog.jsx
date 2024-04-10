import React, { useEffect, useState } from 'react'
import { getMovies } from "../assets/api";
import SearchBar from '../Components/SearchBar';
import Card from '../Components/Card';

function Catalog() {

    const [movies, setMovies] = useState([])
    const [searchInput, setSearchInput] = useState('')
    const [filteredMovies, setFilteredMovies] = useState(movies)

    useEffect(() => {
        getMovies().then(data => setMovies(data)).catch(err => console.error(err))
    }, [])

    useEffect(() => {
        setFilteredMovies(movies.filter(movie => movie.title.toLowerCase().includes(searchInput.toLowerCase())))
      }, [searchInput, movies])

    return (
        <div className='catalog container'>
            <h2 className='catalog__title'>Nuestra selección de películas</h2>
            <div className="catalog__controls">
                <SearchBar
                    value={searchInput}
                    action={e => setSearchInput(e.target.value)}
                />
            </div>
            <div className="catalog__card-container">
                {filteredMovies.map(movie => {
                    return (
                        <Card
                            key={movie.imdbid}
                            {...movie}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Catalog