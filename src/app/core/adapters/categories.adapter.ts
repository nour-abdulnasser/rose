import { Injectable } from '@angular/core';
import { APICategoriesResponse, Category } from '../interfaces/category';

@Injectable({
 providedIn: 'root',
})
export class CategoriesAdapter {
 constructor() {}

 CategoriesAdapter(rawRes: APICategoriesResponse): Category[] {
   return rawRes.categories.map(resItem => ({
     _id: resItem._id, 
     name: resItem.name
   }));
 }
}