import { IProduct } from "./product.interface";

export interface IProductRepository {
  list: IProduct[];
  getProductsList(): Promise<IProduct[]>;
  getProductsById(id: string): Promise<IProduct | undefined>;
}
