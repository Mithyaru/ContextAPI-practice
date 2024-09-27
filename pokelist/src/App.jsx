import './App.css'
import PokemonList from './components/PokemonList'
import { PokemonProvider } from './context/ContextoPoke'

function App() {


  return (
    <PokemonProvider>
      <PokemonList></PokemonList>
    </PokemonProvider>
  )
}

export default App
