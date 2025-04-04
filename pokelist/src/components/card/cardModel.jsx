import "./cardModel.css";

const Card = ({ displayedPokemons }) => {
  const playAudio = (pokemonId) => {
    const audioUrl = `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${pokemonId}.ogg`;
    const audio = new Audio(audioUrl);
    audio.play();
  };

  return (
    <>
      {displayedPokemons.map((pokemon, index) => (
        <div
          onClick={() => playAudio(pokemon.id)}
          key={index}
          className="card-item"
          style={{ "--type-color": `var(--${pokemon.types[0].type.name})` }}
        >
          <div className="img-container">
            <img src={pokemon.sprites.front_default} width={"75"}></img>
          </div>
          <strong>{pokemon.name + " - "}</strong>
          {pokemon.types.map((t) => t.type.name).join(", ")}
        </div>
      ))}
    </>
  );
};

export default Card;
