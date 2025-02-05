import { Component, input } from '@angular/core';
import { Product } from '../../../../core/interfaces/product';
import { TruncatePipe } from '../../../pipes/truncate.pipe';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [TruncatePipe, CurrencyPipe, TitleCasePipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  product = input<Product>({});
}
