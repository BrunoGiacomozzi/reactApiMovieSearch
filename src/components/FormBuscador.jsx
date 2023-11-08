import React, { useState } from 'react'
import { fetchPeliculas } from '../helper/fetchPeliculas';
import { MovieCard } from './MovieCard';

export const FormBuscador = () => {

    const [buscador, setBuscardor] = useState('');
    const [peliculas, setPeliculas] = useState([]);

    function handleBuscador(e) {
        setBuscardor(e.target.value)
    }

    function onSubmit(e) {
        e.preventDefault();
        fetchPeliculas(buscador).then(res => {
            if (res.results) {
                setPeliculas(res.results);
            } else {
                setPeliculas([]); // Establece un arreglo vacío si no hay resultados
            }
        })
            .catch(error => {
                console.error(error);
                setPeliculas([]); // Establece un arreglo vacío en caso de error
            });
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    placeholder='Pelicula a buscar...'
                    value={buscador}
                    onChange={handleBuscador}
                />
                <button className='search' type='submit'>Buscar</button>
            </form>
            <div>
                <MovieCard peliculas={peliculas} />
            </div>
        </div>

    )
}
