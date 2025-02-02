import { Injectable } from "@angular/core";
import { APIBestSellerResponse } from "../interfaces/best-seller";

@Injectable({
  providedIn: 'root',
})
export class BestSellerAdapter {
  constructor() { }

  adapt(rawRes: APIBestSellerResponse): any[] {
    return rawRes.bestSeller.map((resItem) => ({
      _id: resItem._id,
      title: resItem.title,
      price: resItem.price,
      priceAfterDiscount: resItem.priceAfterDiscount,
      imgCover: resItem.imgCover,
      category: resItem.category,
      isNew: this.isNewProduct(resItem.createdAt), // Check if product is new
      isHot: this.isHotProduct(resItem.sold), // Check if product is hot
      outOfStock: this.isOutOfStock(resItem.quantity), // Check if product is out of stock
      originalPrice: resItem.price,
      discountedPrice: resItem.priceAfterDiscount,
    }));
  }

  private isNewProduct(createdAt: string): boolean {
    const createdDate = new Date(createdAt);
    const currentDate = new Date();
    const monthAgo = new Date();
    monthAgo.setMonth(monthAgo.getMonth() - 1); // Product is new if created within the last month

    return createdDate > monthAgo && createdDate <= currentDate;
  }

  private isHotProduct(sold: number): boolean {
    return sold >= 50; // Product is hot if sold 50 or more times
  }

  private isOutOfStock(quantity: number): boolean {
    return quantity <= 0; // Product is out of stock if quantity is 0 or less
  }
}