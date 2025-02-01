export interface APIBestSellerResponse {
  message: string
  bestSeller: BestSeller[]
}

export interface BestSeller {
  _id: string
  title: string
  slug: string
  description: string
  imgCover: string
  images: string[]
  price: number
  priceAfterDiscount: number
  quantity: number
  category: string
  occasion: string
  createdAt: string
  updatedAt: string
  __v: number
  discount: number
  sold: number
  id: string
  isNew?: boolean;
  isHot?: boolean;
  outOfStock?: boolean;
}
