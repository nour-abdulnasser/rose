import { Observable } from 'rxjs';
import {  Category } from '../interfaces/category';
export abstract class CategoriesAPI {
  abstract getAllCategories(): Observable<Category[]>;
}
  