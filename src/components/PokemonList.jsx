import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons}) => {
  return (
    <div className="PokemonList">
      {pokemons.map((pokemon, index) => (
        <PokemonCard 
        key={index} 
        name={pokemon.name} 
        image={pokemon.sprites.front_default}
        types={pokemon.types}
        />
      ))}
    </div>
  );
};


PokemonList.defaultProps = {
  pokemons: Array(10).fill({ name: "Unknown Pokémon" }),
};

export default PokemonList;
