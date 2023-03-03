import { Injectable } from '@nestjs/common';

@Injectable()
export class PokemonService {
  async getAllPokemon(quantity) {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${quantity}&offset=0`,
    );
    const data = await response.json();
    const pokemonNames = data.results.map((pokemon) => pokemon.name);
    return pokemonNames;
  }
  async getAbilities(pokemon) {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
    );
    const data = await response.json();
    return data.abilities;
  }
}
