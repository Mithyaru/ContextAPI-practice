import { useContext } from "react";
import { pokemonContext } from "../context/ContextoPoke";

const PokemonList = () => {
  const { details } = useContext(pokemonContext);

  return (
    <>
      <ul>
        {details.length > 0 ? (
          details.map((pokemon, index) => <li key={index}>
          {pokemon.name + ' - '}
          {pokemon.types.map((t) => t.type.name).join(", ")}
          </li>)
        ) : (
          <p>Carregando...</p>
        )}
      </ul>
    </>
  );
};

export default PokemonList;
