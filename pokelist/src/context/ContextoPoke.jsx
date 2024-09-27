import { useState, useEffect, createContext } from 'react'

export const pokemonContext = createContext()

export const PokemonProvider = ({ children }) => {
    const [pokeList, setPokeList] = useState([])

    useEffect(() => {
        const fetchPokemons = async () => {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
            const data = await response.json();
            setPokeList(data.results);
    }

    fetchPokemons()
}, [])

return (
    <pokemonContext.Provider value={{ pokeList }}>
        {children}
    </pokemonContext.Provider>
)

}




