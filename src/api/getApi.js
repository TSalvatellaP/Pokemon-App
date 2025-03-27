import axios from "axios";

export const getPokemon = async () => {
  try {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151");
    return res.data.results; 
  } catch (error) {
    console.error("Error fetching Pokémon:", error);
    return []; 
  }
};

export const getPokemonDetails = async ({ url }) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.error("Error fetching Pokémon details:", error);
    return null; 
  }
};
