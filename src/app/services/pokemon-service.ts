import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Pokemon} from '../Interface/Pokemon';
import {ApiResponse} from '../Interface/ApiResponse';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  baseURL: string = 'https://api.pokemontcg.io/v2/cards';

  constructor(private http: HttpClient) {
  }

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<ApiResponse<Pokemon[]>>(`${this.baseURL}`).pipe(
      map(res => res.data)
    );
  }
}
