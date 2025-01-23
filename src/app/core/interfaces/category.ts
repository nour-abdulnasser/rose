export interface Category {
  _id?: string;
  name?: string;
  slug?: string;
  image?: string;
  createdAt?: string;
  updatedAt?: string;
  productsCount?: number;
}
// export interface CategoryResponse {
//   _id: string;
//   name: string;
//   slug?: string;
//   image: string;
//   createdAt?: string;
//   updatedAt?: string;
//   productsCount?: number;
// }
export interface APICategoriesResponse {
  message: string;
  metadata: Metadata;
  categories: Category[];
}

export interface Metadata {
  currentPage: number;
  limit: number;
  totalPages: number;
  totalItems: number;
}
