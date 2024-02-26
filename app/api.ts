// api.ts
import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';

export const fetchPokemonList = async (offset: number, limit: number) => {
  try {
    const response = await axios.get(`${BASE_URL}/pokemon?offset=${offset}&limit=${limit}`);
    return response.data.results;
  } catch (error) {
    throw new Error('Failed to fetch data from the server');
  }
};
