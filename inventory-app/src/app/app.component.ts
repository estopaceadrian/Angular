import { Component } from '@angular/core';
import { Product } from './product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  product: Product;

  constructor() {
    this.product = new Product(
      'NiceHat',
      'A Nice Black Hat',
      '/assets/images/products/black-hat.jpg',
      ['Men', 'Accessories', 'hats'],
      2
    );
  }
}
