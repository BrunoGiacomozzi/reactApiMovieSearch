import { useState } from "react";


export async function fetchPeliculas(movieName) {

    const URL_BASE = 'https://api.themoviedb.org/3/search/movie';
    const API_KEY = '4033363cdb8ac25977e70588568d5e2d'

    try {

        const response = await fetch(`${URL_BASE}?query=${movieName}&api_key=${API_KEY}`);
        const data = await response.json();
        return (data);

    } catch (error) {
        console.error(error);
    }

}
