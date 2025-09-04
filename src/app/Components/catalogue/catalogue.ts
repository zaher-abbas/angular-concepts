import {Component} from '@angular/core';
import {Product} from '../../Interface/Product';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-catalogue',
  imports: [
    NgStyle
  ],
  templateUrl: './catalogue.html',
  styleUrl: './catalogue.css'
})
export class Catalogue {
  products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      price: 100,
      onSale: false
    },
    {
      id: 2,
      name: 'Product 2 OS',
      price: 200,
      onSale: true
    },
    {
      id: 3,
      name: 'Product 3 No Price',
      onSale: false
    },
    {
      id: 4,
      name: 'Product 4 OS',
      price: 50,
      onSale: true
    }
  ];

}
