import React, { useState } from 'react'
import { FormBuscador } from './components/FormBuscador'

export const BuscarPelis = () => {


    return (
        <div className='container'>
            <h1 className='title'> Buscador Peliculas: </h1>
            <FormBuscador />
        </div>
    )
}
