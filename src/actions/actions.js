import { type } from "@testing-library/user-event/dist/type";
import { getPokemonDetails } from "../api/getApi";
import { SET_LOADING, SET_POKEMONS } from "./types";

export const setPokemons = (payload)=> ({
    type: SET_POKEMONS,
    payload,
});

export const setLoading = (payload) => ({
    type: SET_LOADING,
    payload,
});

export const getPokemonWithDetails = 
(pokemons = []) => 
   async (dispatch) => {
        const pokemonsDetailed = await Promise.all(
            pokemons.map((pokemon) => getPokemonDetails(pokemon))
        );

dispatch(setPokemons(pokemonsDetailed));
};