import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { CategoriesService } from '../../../../../core/services/categories.service';
import { Category } from '../../../../../core/interfaces/category';
import { Subject, takeUntil } from 'rxjs';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { TitleCasePipe } from '@angular/common';
import { CategoryCardComponent } from '../../../../../shared/components/ui/category-card/category-card.component';

@Component({
  selector: 'app-category-slider',
  imports: [CarouselModule, TitleCasePipe, CategoryCardComponent],
  templateUrl: './category-slider.component.html',
  styleUrl: './category-slider.component.scss',
})
export class CategorySliderComponent implements OnInit, OnDestroy {
  categories = signal<Category[]>([]);
  // categories: Category[] = [];
  destroy$ = new Subject<any>();

  constructor(private _categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this._categoriesService
      .getAllCategories()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          this.categories.set(res);
          console.log('catergories from slider', this.categories());
          // this.categories = res;
          // console.log('catergories from slider', this.categories);
        },
        error: (err) => {
          console.error('Error from slider', err);
        },
      });
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 10000,
    slideTransition: 'linear',
    center: true,
    
    margin:30,
    
    // autoplayHoverPause: true,
    // navText: ['', ''],
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 2,
      },
      740: {
        items: 4,
      },
      940: {
        items: 4,
      },
    },
    nav: false,
  };

  ngOnDestroy(): void {}
}
