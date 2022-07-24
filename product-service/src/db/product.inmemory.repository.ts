import productsList from "./products.json";
import { IProduct } from "../utils/product.interface";
import { IProductRepository } from "../utils/product.repository.interface";

export default class InMemoryRepository implements IProductRepository {
  list: IProduct[];
  constructor(list) {
    this.list = list;
  }
  getProductsList() {
    return Promise.resolve(this.list);
  }
  getProductsById(id: string) {
    return Promise.resolve(this.list.find((product: IProduct) => product.id === id));
  }
}

const inMemoryDb = new InMemoryRepository(productsList);
export { inMemoryDb };
