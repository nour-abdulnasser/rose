import { Component } from '@angular/core';
import { input } from '@angular/core';
import { SidebarFilterContent } from '../../interfaces/sidebar-filter-content';
import { TitleCasePipe } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-sidebar-sector',
  imports: [TitleCasePipe, MatSliderModule],
  templateUrl: './sidebar-sector.component.html',
  styleUrl: './sidebar-sector.component.scss',
})
export class SidebarSectorComponent {
  sectorContent = input<SidebarFilterContent>();
}
