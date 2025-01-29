import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductsAPI } from '../base/ProductsAPI';
import { map, Observable } from 'rxjs';
import { APIProductsResponse, Product } from '../interfaces/product';
import { ApiEndpoint } from '../enums/api.endpoints';
import { ProductsAdapter } from '../adapters/products.adapter';

@Injectable({
  providedIn: 'root',
})
export class ProductsService implements ProductsAPI {
  constructor(
    private _HttpClient: HttpClient,
    private _ProductsAdapter: ProductsAdapter
  ) {}

  getAllProducts(): Observable<Product[]> {
    return this._HttpClient
      .get<APIProductsResponse>(ApiEndpoint.PRODUCTS)
      .pipe(
        map((res: APIProductsResponse) =>
          this._ProductsAdapter.ProductsAdapter(res)
        )
      );
  }
}
