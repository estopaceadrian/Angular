import { Component } from '@angular/core';
import { Product } from './product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  products: Product[];

  constructor() {
    this.products = [
      new Product(
        'NEATOJACKET',
        'Blue Jacket',
        '/assets/images/products/blue_image.jpg ',
        ['Men', 'Accessories', 'Jackets & Vests'],
        238.99
      ),
      new Product(
        'MYSHOES',
        'Black running shoes',
        '/assets/images/products/black_shoes.jpg',
        ['Men', 'Accessories', 'Running Shoes'],
        2
      ),
      new Product(
        'NICEHAT',
        'A Nice Black Hat',
        '/assets/images/products/black_hat.jpg',
        ['Men', 'Accessories', 'hats'],
        29.99
      ),
    ];
  }

  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
  }
}
