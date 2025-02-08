import { Component } from '@angular/core';
import { SidebarSectorComponent } from '../sidebar-sector/sidebar-sector.component';

@Component({
  selector: 'app-sidebar',
  imports: [SidebarSectorComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  /**
   * filters: category, brand, sales, sizes
   *
   */
  brands = {
    title: 'brands',
    content: [
      { name: 'Tovola', totalItems: 8 },
      { name: 'Sundoy', totalItems: 8 },
      { name: 'Sahoo Gifts', totalItems: 8 },
      { name: 'Casterly', totalItems: 8 },
      { name: 'Maiden Gifts', totalItems: 8 },
    ],
  };
  categories = {
    title: 'category',
    content: [
      { name: 'Home & Living', totalItems: 8 },
      { name: 'Garment Care', totalItems: 8 },
      { name: 'Jewelry & Accessories', totalItems: 8 },
      { name: 'Office & Stationery', totalItems: 8 },
      { name: 'Personalised Gifts', totalItems: 8 },
      { name: 'Gifts Box', totalItems: 8 },
      { name: 'Other', totalItems: 8 },
    ],
  };

  sales = {
    title: 'sales',
    content: [
      { name: 'On sale' },
      { name: 'In stock' },
      { name: 'Out of stock' },
      { name: 'Discount' },
    ],
  };
  sizes = {
    title: 'sizes',
    content: [
      { name: 'Extra small' },
      { name: 'Small' },
      { name: 'Medium' },
      { name: 'Large' },
      { name: 'Extra large' },
    ],
  };
}
