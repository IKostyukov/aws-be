import { IProduct } from "./product.interface";

export interface IProductRepository {
  getProductsList(): Promise<IProduct[]>;
  getProductsById(id: string): Promise<IProduct | undefined>;
  createProduct(
    body: Pick<IProduct, "title" | "description" | "count" | "price" | "thumbnail">
  ): Promise<IProduct>;
}
