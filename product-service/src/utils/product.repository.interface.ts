import { IProduct } from "./product.interface";

export interface IProductRepository {
  getProductsList(): Promise<IProduct[]>;
  getProductsById(id: string): Promise<IProduct | undefined>;
}
