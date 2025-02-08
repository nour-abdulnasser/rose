import { environment } from '../../../../environments/environment';

export class ApiEndpoint {
  static CATEGORIES = `${environment.baseUrl}/categories`;
  static PRODUCTS = `${environment.baseUrl}/products`;
  static BESTSELLER = `${environment.baseUrl}/best-seller`;
}
