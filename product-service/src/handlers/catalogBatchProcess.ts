import { IProductRepository } from "../utils/product.repository.interface";

export const catalogBatchProcessHandler =
  (productRepository: IProductRepository) => async (event, _context) => {
    try {
      for (const product of event.Records) {
        const { title, description, price, count, thumbnail } = JSON.parse(
          product.body
        );
        const productCreated = await productRepository.createProduct({
          title,
          description,
          price: Number(price),
          count: Number(count),
          thumbnail,
        });
        console.log(productCreated);
      }
      
    } catch (err) {
      throw err;
    }
  };
