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
      isNew: this.isNewProduct(resItem.createdAt),
      isHot: this.isHotProduct(resItem.sold),
      outOfStock: this.isOutOfStock(resItem.quantity),
      originalPrice: resItem.price,
      discountedPrice: resItem.priceAfterDiscount,
    }));
  }

  private isNewProduct(createdAt: string): boolean {
    const createdDate = new Date(createdAt);
    const currentDate = new Date();
    const monthAgo = new Date();
    monthAgo.setMonth(monthAgo.getMonth() - 1); // مقارنة بآخر شهر

    return createdDate > monthAgo && createdDate <= currentDate;
  }

  private isHotProduct(sold: number): boolean {
    return sold >= 50; // أي منتج بيع أكثر من 50 مرة يعتبر "Hot"
  }

  private isOutOfStock(quantity: number): boolean {
    return quantity <= 0; // إذا كان المخزون صفر أو أقل، فهو غير متوفر
  }
}
