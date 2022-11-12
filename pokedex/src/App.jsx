import React from 'react'
import { Header, Listado } from '../components'
import { usePokemon } from "../hooks/usePokemon";

const App = () => {
    const { pokemons } = usePokemon();

    return (
        <>
            <Header/>
            <Listado
              pokemons={pokemons}
            />
        </>
    )
}

export default App