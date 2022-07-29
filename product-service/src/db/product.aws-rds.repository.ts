import { IProductRepository } from "../utils/product.repository.interface";
import { Client, QueryConfig } from "pg";
import { client } from "./db.connection";
import { IProduct } from "@/utils/product.interface";
export default class AwsRdsRepository implements IProductRepository {
  constructor(private db: Client) {}

  async getProductsList() {
    const q: QueryConfig = {
      text: `SELECT products.*, stocks.count FROM products INNER JOIN stocks ON products.id = stocks.product_id`,
    };
    try {
      const result = await this.db.query(q);
      return result?.rows.length ? result.rows : null;
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
      return result?.rows[0] ? result.rows[0] : null;
    } catch (err) {
      throw new Error(err);
    }
  }

  async createProduct(product) {
    try {
      const { title, description, price, count, thumbnail } = product;

      await this.db.query("BEGIN");

      const productQuery: QueryConfig = {
        text: `INSERT INTO products (title, description, price, thumbnail) VALUES ($1, $2, $3, $4) RETURNING *`,
        values: [title, description, price, thumbnail],
      };
      const createdProductWihoutCount = await this.db.query(productQuery);

      const stocksQuery: QueryConfig = {
        text: `INSERT INTO stocks (product_id, count) VALUES ($1, $2) RETURNING *`,
        values: [createdProductWihoutCount.rows[0].id, count],
      };
      const createdProductCount = await this.db.query(stocksQuery);

      const createdProduct = {
        ...createdProductWihoutCount.rows[0],
        count: createdProductCount.rows[0].count,
      };

      await this.db.query("COMMIT");

      return createdProduct;
    } catch (err) {
      await this.db.query("ROLLBACK");
      throw new Error(err);
    }
  }
}
