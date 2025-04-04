import { useContext, useRef } from "react";
import { pokemonContext } from "../context/ContextoPoke";
import "./PokemonList.css";
import Card from "./card/cardModel";

const PokemonList = () => {
  const { details, loading, currentPage, setCurrentPage } =
    useContext(pokemonContext);

  const itemsPerPage = 100;
  const totalPages = Math.ceil(details.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  // Paginação: mostra apenas os 100 Pokémon da página atual
  const displayedPokemons = details.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <>
      <main className="main">
        <div className="container">
          <div className="cards">
            <div className="cards-list">
              <Card displayedPokemons={displayedPokemons}></Card>
            </div>
          </div>
          <div className="pagination">
            <button onClick={handlePrevPage} disabled={currentPage === 0}>
              Anterior
            </button>
            <span>Página {currentPage + 1}</span>
            <button
              onClick={handleNextPage}
              disabled={currentPage >= totalPages - 1}
            >
              Próxima
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default PokemonList;
