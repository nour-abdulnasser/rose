import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs',
  imports: [CommonModule],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.scss'
})
export class FAQsComponent implements OnInit {
  termsData: any;

  constructor(private _HttpClient: HttpClient) {}

  ngOnInit(): void {
    this._HttpClient.get('assets/FAQs.json').subscribe({
      next: (data: any) => {
        this.termsData = data;
      },
      error: (error) => {
        console.error('Error loading JSON:', error);
      }
    });
  }
}
