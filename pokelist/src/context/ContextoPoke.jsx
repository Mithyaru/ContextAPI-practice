import { useState, useEffect, createContext } from "react";

export const pokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [pokeList, setPokeList] = useState([]);
  const [poke2, setPoke2] = useState([]);
  const [details, setDetails] = useState({});

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );
      const data = await response.json();
      setPokeList(data.results);
      setPoke2(data.results.url);
    };

    fetchPokemons();
  }, []);

  useEffect(() => {
    const fetchDetails = async () => {
      const detailsObj = [];

      for (const pokemon of pokeList) {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await response.json();
        detailsObj.push(data)
      }

      setDetails(detailsObj);
      console.log(detailsObj);
    };

    fetchDetails();
  }, [pokeList]);

  return (
    <pokemonContext.Provider value={{ details }}>
      {children}
    </pokemonContext.Provider>
  );
};
