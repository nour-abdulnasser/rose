import { Component, input } from '@angular/core';
import { Product } from '../../../../core/interfaces/product';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  product = input<Product>({});
}
