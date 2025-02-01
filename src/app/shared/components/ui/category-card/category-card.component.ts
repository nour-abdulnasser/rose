import { Component, input } from '@angular/core';
import { Category } from '../../../../core/interfaces/category';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-category-card',
  imports: [TitleCasePipe],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.scss',
})
export class CategoryCardComponent {
  category = input<Category>({});
}
