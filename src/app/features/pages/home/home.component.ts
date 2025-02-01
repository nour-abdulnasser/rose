import { Component } from '@angular/core';
import { PopularItemsComponent } from './components/popular-items/popular-items.component';
import { CategorySliderComponent } from './components/category-slider/category-slider.component';

@Component({
  selector: 'app-home',
  imports: [PopularItemsComponent, CategorySliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
