import { Component, OnInit, signal, computed } from '@angular/core';
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
  selectedCategory = signal<string>('')
  categories = signal<Category[]>([]);
  topCategories = computed(() => this.categories().slice(0, 4));
  products = signal<Product[]>([]);
  filteredProducts = signal<Product[]>([]); 
  constructor(
    private _CategoriesService: CategoriesService,
    private _ProductsService: ProductsService
  ) {}

  ngOnInit() {
    this._CategoriesService
      .getAllCategories()
      // .pipe(map((categories: Category[]) => categories.slice(0, 4)))
      .subscribe({
        next: (categories: Category[]) => {
          this.categories.set(categories);
        },
        error: (error) => console.error('Error fetching categories:', error),
      });
    this._ProductsService.getAllProducts().subscribe({
      next: (products: Product[]) => {
        this.products.set(products);
        console.log('All products:', this.products());
      },
      error: (error) => console.error('Error fetching prods:', error),
    });

  }

  getCategoryItems(categoryId: string) {
    // Filter the existing products, no extra API call..
    console.log(categoryId);
    console.log(this.products());
    
    const filteredProducts = this.products().filter(
      (prod:Product) => prod.category === categoryId
    );
    console.log(filteredProducts);
    
    this.filteredProducts.set(filteredProducts);

  }
}
