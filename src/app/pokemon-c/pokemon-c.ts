import {Component} from '@angular/core';
import {PokemonService} from '../pokemon-service';
import {Pokemon} from '../Interface/Pokemon';

@Component({
  selector: 'app-pokemon',
  imports: [],
  templateUrl: './pokemon-c.html',
  styleUrl: './pokemon-c.css'
})
export class PokemonC {
  pokemons!: Pokemon[];

  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit() {
    this.pokemonService.getPokemons().subscribe({
      next: (pokemons: Pokemon[]) => {
        this.pokemons = pokemons;
        console.log(pokemons);
      },
      error: (err) => {
        console.error('Erreur lors du chargement des utilisateurs', err);
      }
    })
  }
}
