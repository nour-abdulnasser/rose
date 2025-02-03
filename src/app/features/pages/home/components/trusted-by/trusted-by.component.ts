import { Component } from '@angular/core';

@Component({
  selector: 'app-trusted-by',
  imports: [],
  templateUrl: './trusted-by.component.html',
  styleUrl: './trusted-by.component.scss'
})
export class TrustedByComponent {
  logos: string[] = [
    '/images/trusted-1.png',
    '/images/trusted-2.png',
    '/images/trusted-3.png',
    '/images/trusted-4.png',
    '/images/trusted-5.png',
    '/images/trusted-6.png',
  ];
}
