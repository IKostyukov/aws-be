import { IProduct } from "../utils/product.interface";
import { IProductRepository } from "../utils/product.repository.interface";

// import initDB from "./db.connection";
import { client } from "./db.connection";
import { QueryConfig } from "pg";

export default class AwsRdsRepository implements IProductRepository {
  // private productsTableName = "products";
  // private stocksTableName = "stocks";
  db: any;

  constructor(db) {
    this.db = db;
  }
  async getProductsList() {
    const q: QueryConfig = {
      text: `SELECT products.*, stocks.count FROM products INNER JOIN stocks ON products.id = stocks.product_id`,
    };
    try {
      const result = await this.db.query(q);
      return result.rows.length ? result.rows : null;
    } catch (err) {
      throw new Error(err);
    }
  }
  async getProductsById(id: string) {
    const q: QueryConfig = {
      text: `SELECT products.*, stocks.count FROM products LEFT JOIN stocks on products.id=stocks.product_id WHERE products.id=$1`,
      values: [id],
    };
    try {
      const result = await this.db.query(q);
      return result.rows[0] ? result.rows[0] : null;
    } catch (err) {
      throw new Error(err);
    }
  }
}

export const awsRdsDb = new AwsRdsRepository(client);
