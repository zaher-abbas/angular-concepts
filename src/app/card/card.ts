import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-card',
  imports: [
    FormsModule,
  ],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  user: User = {
    image: '/assets/johndoe.png',
    name: 'John',
    age: 30,
    citation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  };
}

interface User {
  image: string;
  name: string;
  age: number;
  citation: string;
}
