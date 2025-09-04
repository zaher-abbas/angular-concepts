import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Calculator} from './Components/calculator/calculator';
import {Card} from './Components/card/card';
import {Catalogue} from './Components/catalogue/catalogue';
import {Button} from './Components/button/button';
import {ToDo} from './Components/to-do/to-do';
import {LoginForm} from './Components/login-form/login-form';
import {PokemonC} from './Components/pokemon-c/pokemon-c';
import {PostC} from './Components/post-c/post-c';

@Component({
  selector: 'app-root',
  imports: [Calculator, Card, Catalogue, Button, ToDo, RouterOutlet, LoginForm, PokemonC, PostC],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-intro');

  showButtonLabel(event: any) {
    alert(event);
  }
}
