import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  galleryImages = [
    {
      src: '/images/gallery-1.png',
      colSpanClass: 'col-span-1',
    },
    {
      src: '/images/gallery-2.png',
      colSpanClass: 'col-span-1',
    },
    {
      src: '/images/gallery-3.png',
      colSpanClass: 'col-span-1',
    },
    {
      src: '/images/gallery-4.png',
      colSpanClass: 'col-span-1  md:col-span-2',
    },
    {
      src: '/images/gallery-5.png',
      colSpanClass: 'col-span-1',
    },
  ];
}
