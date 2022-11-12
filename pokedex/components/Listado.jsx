import React from 'react'
import { Pokemon } from './Pokemon'

export const Listado = ({pokemons}) => {
  return (
    <>
        <h2>Listado de pokemones</h2>
        <ul className='poke_list'>
        {
            pokemons.map(pokemon => 
                <Pokemon
                    key={pokemon.id}
                    pokemon={pokemon}
                />       
            )
        }

        </ul>
    </>
  )
}
