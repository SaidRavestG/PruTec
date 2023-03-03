import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PokemonService } from './service/pokemon.service';

@ApiTags('POKEMON')
@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get(':pokemon')
  getPokemon(@Param('pokemon') pokemon: string) {
    return this.pokemonService.getAbilities(pokemon);
  }

  @Get()
  getAllPokemon(@Query('quantity') quantity: number) {
    return this.pokemonService.getAllPokemon(quantity);
  }
}
