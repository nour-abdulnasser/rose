import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../../core/services/categories.service';
import { Category } from '../../../core/interfaces/category';
import { map } from 'rxjs';
import { ProductCardComponent } from '../../../shared/components/ui/product-card/product-card.component';
import { Product } from '../../../core/interfaces/product';
import { ProductsService } from '../../../core/services/products.service';

@Component({
  selector: 'app-popular-items',
  imports: [ProductCardComponent],
  templateUrl: './popular-items.component.html',
  styleUrl: './popular-items.component.scss',
})
export class PopularItemsComponent implements OnInit {
  categories: Category[] = [];
  products: Product[] = [];

  constructor(private _CategoriesService: CategoriesService, private _ProductsService:ProductsService) {}

  ngOnInit() {
    this._CategoriesService
      .getAllCategories()
      // .pipe(map((categories: Category[]) => categories.slice(0, 4)))
      .subscribe({
        next: (topCategories: Category[]) => {
          this.categories = topCategories;
          console.log('Top 4 categories:', this.categories);
        },
        error: (error) => console.error('Error fetching categories:', error),
      });
    this._ProductsService
      .getAllProducts()
      .subscribe({
        next: (products: Product[]) => {
          this.products = products;
          console.log('All products:', this.products);
        },
        error: (error) => console.error('Error fetching prods:', error),
      });
  }
}
