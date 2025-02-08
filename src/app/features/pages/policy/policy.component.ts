import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-policy',
  imports: [CommonModule],
  templateUrl: './policy.component.html',
  styleUrl: './policy.component.scss'
})
export class PolicyComponent {
termsData: any;

  constructor(private _HttpClient: HttpClient) {}

  ngOnInit(): void {
    this._HttpClient.get('assets/policy.json').subscribe({
      next: (data: any) => {
        this.termsData = data;
      },
      error: (error) => {
        console.error('Error loading JSON:', error);
      }
    });
  }
}
