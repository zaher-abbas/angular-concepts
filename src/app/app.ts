import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Calculator} from './calculator/calculator';
import {Card} from './card/card';
import {Catalogue} from './catalogue/catalogue';
import {Button} from './button/button';
import {ToDo} from './to-do/to-do';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Calculator, Card, Catalogue, Button, ToDo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-intro');

  showButtonLabel(event: any) {
    alert(event);
  }
}
