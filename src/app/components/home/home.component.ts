import { Component } from '@angular/core';
import { ProductCardComponent } from '../../shared/components/ui/product-card/product-card.component';
@Component({
  selector: 'app-home',
  imports: [ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
