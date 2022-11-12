import { useContext } from "react";
import PokemonContext from "../context/PokemonProvider";

export const usePokemon = () => {
  return useContext(PokemonContext)
}
