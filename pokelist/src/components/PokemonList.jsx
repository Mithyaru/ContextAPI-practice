import { useContext } from 'react';
import { pokemonContext } from '../context/ContextoPoke';


const PokemonList = () => {
  const { pokeList } = useContext(pokemonContext)

  return (
    <ul>
      {pokeList.map((pokemon, index) => (
        <li key={index}>{pokemon.name}</li>
      ))}
    </ul>
  );
};

export default PokemonList;
