import axios from "axios";

const getPokemon = async () => {
  try {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151");
    return res.data.results; // Devuelve solo la lista de Pokémon
  } catch (error) {
    console.error("Error fetching Pokémon:", error);
    return []; // Devuelve un array vacío en caso de error
  }
};

export default getPokemon;
