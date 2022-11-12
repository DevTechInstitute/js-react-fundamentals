import React, { useState } from 'react'
import { usePokemon } from '../hooks/usePokemon'
import { Pokemon } from './Pokemon'

export const Header = () => {
    const [buscador, setBuscador] = useState('')
    const [pokemon, setPokemon] = useState([])
    const { pokemons } = usePokemon();
    const searchPokemon = e => {
        e.preventDefault();
        setPokemon( pokemons.filter( poke => poke.name == buscador.toLocaleLowerCase()));
    }
    
    return (
        <header>
            <h1>
                Pokedex
            </h1>
            <form>
                <input 
                    type="text" 
                    value={buscador}
                    onChange={e => setBuscador(e.target.value )}
                />    
                <button type="submit" onClick={searchPokemon}>submit</button>
            </form>
        {
            pokemon.length > 0 && <Pokemon pokemon={pokemon[0]}/>
        }
        </header>
    )
}
