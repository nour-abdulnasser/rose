import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery',
  imports: [CommonModule],
  templateUrl: './delivery.component.html',
  styleUrl: './delivery.component.scss'
})
export class DeliveryComponent implements OnInit {
  deliveryData: any;

  constructor(private _HttpClient: HttpClient) {}

  ngOnInit(): void {
    this._HttpClient.get('assets/delivery.json').subscribe({
      next: (data: any) => {
        this.deliveryData = data.delivery;
      },
      error: (error) => {
        console.error('Error loading JSON:', error);
      }
    });
  }
}
