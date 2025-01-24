import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../../core/services/categories.service';
import { Category } from '../../../core/interfaces/category';
import { map } from 'rxjs';
import { ProductCardComponent } from '../../../shared/components/ui/product-card/product-card.component';

@Component({
  selector: 'app-popular-items',
  imports: [ProductCardComponent],
  templateUrl: './popular-items.component.html',
  styleUrl: './popular-items.component.scss',
})
export class PopularItemsComponent implements OnInit {
  categories: Category[] = [];

  constructor(private _CategoriesService: CategoriesService) {}

  ngOnInit() {
    this._CategoriesService.getAllCategories()
      .pipe(
        map((categories:Category[]) => categories.slice(0, 4))
      )
      .subscribe({
        next: (topCategories: Category[]) => {
          this.categories = topCategories;
          console.log('Top 4 categories:', this.categories);
        },
        error: (error) => console.error('Error fetching categories:', error)
      });
  }
}