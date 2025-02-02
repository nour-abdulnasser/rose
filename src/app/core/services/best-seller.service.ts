import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BestSellerAdapter } from '../adapters/bestsellet.adepter';
import { APIBestSellerResponse } from '../interfaces/best-seller';
import { ApiEndpoint } from '../enums/api.endpoints';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BestSellerService {

  constructor(
    private _HttpClient: HttpClient,
    private _BestSellerAdapter: BestSellerAdapter,
  ) { }

  getAllBestsellers() {
    return this._HttpClient.get<APIBestSellerResponse>(ApiEndpoint.BESTSELLER).pipe(
      map((res: APIBestSellerResponse) => 
        this._BestSellerAdapter.adapt(res)
      )
    );
  }
}