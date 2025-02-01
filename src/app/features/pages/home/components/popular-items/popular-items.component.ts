import { Component, OnInit, signal, computed, OnDestroy } from '@angular/core';
import { CategoriesService } from '../../../../../core/services/categories.service';
import { Category } from '../../../../../core/interfaces/category';
import { map, Subject, takeUntil } from 'rxjs';
import { ProductCardComponent } from '../../../../../shared/components/ui/product-card/product-card.component';
import { Product } from '../../../../../core/interfaces/product';
import { ProductsService } from '../../../../../core/services/products.service';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-popular-items',
  imports: [ProductCardComponent, TitleCasePipe],
  templateUrl: './popular-items.component.html',
  styleUrl: './popular-items.component.scss',
})
export class PopularItemsComponent implements OnInit, OnDestroy {

/**
 * Pattern for cleanup
 */
// 
// destroy subject
private destroy$ = new Subject<void>();

  selectedCategory = signal<string>('');
  categories = signal<Category[]>([]);
  topCategories = computed(() => this.categories().slice(0, 4));
  products = signal<Product[]>([]);
  filteredProducts = computed(() => {
    return this.selectedCategory().length
      ? this.products().filter(
          (prod) => prod.category === this.selectedCategory()
        )
      : this.products();
  });
  constructor(
    private _categoriesService: CategoriesService,
    private _productsService: ProductsService
  ) {}

  ngOnInit() {
    this._categoriesService
      .getAllCategories()
      // subscription prep for cleanup
      .pipe(takeUntil(this.destroy$))
      // .pipe(map((categories: Category[]) => categories.slice(0, 4)))
      .subscribe({
        next: (categories: Category[]) => {
          this.categories.set(categories);
        },
        error: (error) => console.error('Error fetching categories:', error),
      });
    this._productsService
      .getAllProducts()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (products: Product[]) => {
          this.products.set(products);
        },
        error: (error) => console.error('Error fetching prods:', error),
      });
  }

  getCategoryItems(categoryId: string) {
    // Filter the existing products, no extra API call..
    this.selectedCategory.set(categoryId);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
