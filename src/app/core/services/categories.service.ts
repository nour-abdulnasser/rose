import { Injectable } from '@angular/core';
import { ApiEndpoint } from '../enums/api.endpoints';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Category, APICategoriesResponse } from '../interfaces/category';
import { CategoriesAdapter } from '../adapters/categories.adapter';
import { CategoriesAPI } from '../base/CategoriesAPI';
// TODO: implement adapters
@Injectable({
  providedIn: 'root',
})
export class CategoriesService implements CategoriesAPI{
  constructor(
    private _httpClient: HttpClient,
    private _categoriesAdapter: CategoriesAdapter
  ) {}

  getAllCategories(): Observable<Category[]> {
    return this._httpClient
      .get<APICategoriesResponse>(ApiEndpoint.CATEGORIES)
      .pipe(
        map((res: APICategoriesResponse) =>
          this._categoriesAdapter.CategoriesAdapter(res)
        )
      );
  }
}
