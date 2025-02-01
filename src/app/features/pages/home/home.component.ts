import { Component } from '@angular/core';
import { PopularItemsComponent } from './components/popular-items/popular-items.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { TrustedByComponent } from './components/trusted-by/trusted-by.component';

@Component({
  selector: 'app-home',
  imports: [PopularItemsComponent , AboutUsComponent , TrustedByComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
