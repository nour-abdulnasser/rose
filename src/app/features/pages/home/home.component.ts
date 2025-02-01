import { Component } from '@angular/core';
import { PopularItemsComponent } from './components/popular-items/popular-items.component';
import { SliderComponent } from "../../../shared/components/ui/slider/slider.component";

@Component({
  selector: 'app-home',
  imports: [PopularItemsComponent, SliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
