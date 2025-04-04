import { useState, useEffect, createContext } from "react";

export const pokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [details, setDetails] = useState([]); // Detalhes dos Pokémon
  const [loading, setLoading] = useState(false); // Estado de carregamento
  const [page, setPage] = useState(0); // Página atual
  const [currentPage, setCurrentPage] = useState(0); // Página visível na UI
  const [hasMore, setHasMore] = useState(true);

  const fetchPokemons = async () => {
    const limit = 100;
    let offset = 0
    let allDetails = [];

    setLoading(true);


    try {
      while (true) {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
      );
      const data = await response.json();

      if (!data.results || data.results.length === 0) {
        setHasMore(false);
        return;
      }

      console.log(data.results)
      const detailsObj = await Promise.all(
        data.results.map(async (pokemon) => {
          const pokemonResponse = await fetch(pokemon.url);
          return await pokemonResponse.json();
        })
      );

      allDetails = [...allDetails, ...detailsObj];
      offset += limit;
      setDetails(allDetails);
    }
    } catch (error) {
      console.error("Erro ao buscar Pokémon:", error);
    }
    
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <pokemonContext.Provider
      value={{ details, loading, currentPage, setCurrentPage, hasMore }}
    >
      {children}
    </pokemonContext.Provider>
  );
};
