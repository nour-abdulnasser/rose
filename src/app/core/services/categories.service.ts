import { Injectable } from '@angular/core';
import { ApiEndpoint } from '../enums/api.endpoints';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoriesResponse } from '../interfaces/category';

// TODO: implement adapters
@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private _HttpClient: HttpClient) {}

  getAllCategories(): Observable<CategoriesResponse> {
    return this._HttpClient.get(ApiEndpoint.CATEGORIES);
  }
}
