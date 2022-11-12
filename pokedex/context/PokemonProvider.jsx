import { createContext, useEffect, useState } from 'react';

const PokemonContext = createContext();

const PokemonProvider = ({children}) => {
     const [pokemons, setPokemons] = useState([])
  
     const getPokemos = async () => {
       const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
       const {results} = await response.json();
       
       setPokemons(results.map((result,i) => {
         const data = {
           ...result,
           id: i + 1,
           image: `https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/other/dream-world/${i+1}.svg` 
         }
         return data
       }))
     }
   
     useEffect(() => {
       getPokemos();
     }, [])
     

     return(
          <PokemonContext.Provider value={{
               pokemons
          }}>
               {children}
          </PokemonContext.Provider>
     )
}
export { PokemonProvider };
export default PokemonContext;