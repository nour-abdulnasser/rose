import { Component } from '@angular/core';
import { PopularItemsComponent } from './components/popular-items/popular-items.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { TrustedByComponent } from './components/trusted-by/trusted-by.component';
import { SliderComponent } from "../../../shared/components/ui/slider/slider.component";
import { BestSellerComponent } from "./components/best-seller/best-seller.component";
import { GalleryComponent } from './components/gallery/gallery.component';
import { CategorySliderComponent } from './components/category-slider/category-slider.component';

@Component({
  selector: 'app-home',
  imports: [PopularItemsComponent, GalleryComponent, CategorySliderComponent, BestSellerComponent, SliderComponent, AboutUsComponent , TrustedByComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
