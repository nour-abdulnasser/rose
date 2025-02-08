import { Component, signal } from '@angular/core';
import { input } from '@angular/core';
import { SidebarFilterContent } from '../../interfaces/sidebar-filter-content';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sidebar-sector',
  imports: [TitleCasePipe, MatSliderModule, FormsModule, CurrencyPipe],
  templateUrl: './sidebar-sector.component.html',
  styleUrl: './sidebar-sector.component.scss',
})
export class SidebarSectorComponent {
  sectorContent = input<SidebarFilterContent>();
  selectedMinPrice = signal(0);
  selectedMaxPrice = signal(80);
}
