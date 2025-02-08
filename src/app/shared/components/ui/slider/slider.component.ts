import { Component, OnInit, ViewChild, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestSellerService } from '../../../../core/services/best-seller.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { BestSeller } from '../../../../core/interfaces/best-seller';
import { CarouselModule, CarouselComponent } from 'ngx-owl-carousel-o';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule, CarouselModule, ProductCardComponent], // تأكد من استيراد جميع الوحدات
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @ViewChild(CarouselComponent) owlCarousel!: CarouselComponent;

  slider = signal<BestSeller[]>([]);

  customOptions: OwlOptions = {
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
      0: { items: 1 },
      600: { items: 3 },
      1000: { items: 3 }
    },
    navText: [
      '<i class="fas fa-chevron-left icone"></i>',
      '<i class="fas fa-chevron-right icone"></i>'
    ]
  };
  

  constructor(private _bestSellerService: BestSellerService) {}

  ngOnInit(): void {
    this.fetchBestSellers();
  }

  fetchBestSellers(): void {
    this._bestSellerService.getAllBestsellers().subscribe({
      next: (data) => {
        if (data && data.length > 0) {
          this.slider.set(data);
        } else {
          console.warn('No bestsellers found');
        }
      },
      error: (error) => console.error('Error fetching bestsellers:', error)
    });
  }
  calculateDiscountPercent(product: BestSeller): number {
    if (!product.price || !product.priceAfterDiscount) return 0;
    return Math.round(((product.price - product.priceAfterDiscount) / product.price) * 100);
  }
}
