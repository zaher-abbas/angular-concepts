import {Component} from '@angular/core';
import {PokemonService} from '../../services/pokemon-service';
import {Pokemon} from '../../Interface/Pokemon';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-pokemon',
  imports: [],
  templateUrl: './pokemon-c.html',
  styleUrl: './pokemon-c.css'
})
export class PokemonC {
  loading: boolean = true;
  pokemons!: Pokemon[];

  constructor(private pokemonService: PokemonService, private toastr: ToastrService) {
  }

  ngOnInit() {
    this.pokemonService.getPokemons().subscribe({
      next: (pokemons: Pokemon[]) => {
        this.toastr.success('Pokemons loaded successfully!', 'Hi!');
        this.pokemons = pokemons;
        this.loading = false;

      },
      error: (err) => {
        this.loading = false;
        console.error('Erreur lors du chargement des utilisateurs', err);
      }
    })
  }
}
