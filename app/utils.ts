import axios from 'axios';
import { Pokemon } from './types';

const BASE_URL = 'https://pokeapi.co/api/v2';

export const getIdPokemon = (url: string): string => {
  const parts = url.split("/");
  return parts[parts.length - 2]
};


export const getPokemonUrlImage = (url: string): string => {
  const id = getIdPokemon(url)
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  return imageUrl
};

export const filterPokemonByName = (pokemonList:Pokemon[], name:string) => {
  return pokemonList.filter(pokemon => pokemon.name.toLowerCase().includes(name.toLowerCase()));
};

export const fetchPokemonSearch = async (keyword: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/pokemon?offset=0&limit=10000`);
    const data = response.data.results
    return filterPokemonByName(data,keyword)
  } catch (error) {
    throw new Error('Failed to fetch data from the server');
  }
}