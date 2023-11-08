import React from 'react'

export const MovieCard = ({ peliculas }) => {

    return (
        <div className='movie-list'>
            {peliculas.map((pelicula) => (
                <div className='movie-card' key={pelicula.id}>
                    <img src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}.jpg`} alt={pelicula.title} />
                    <h2>{pelicula.title}</h2>
                    <p>{pelicula.overview}</p>
                    <i> visto por: <mark>{pelicula.popularity}</mark> personas</i>
                </div>
            ))}
        </div>
    )
}
