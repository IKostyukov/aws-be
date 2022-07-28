import { IProductRepository } from "../utils/product.repository.interface";
import { errorResponse, successResponse } from "../utils/responseHandler";
import logger from "../utils/logger";

export const createProductsHandler =
  (productRepository: IProductRepository) => async (event, _context) => {
    try {
      logger(event);
      const { title, description, price, count, thumbnail } = JSON.parse(
        event.body
      );
      if (!title || !description || !price || !count) {
        return errorResponse(new Error("You missed fields"), 400);
      }
      const productCreated = await productRepository.createProduct({
        title,
        description,
        price: Number(price),
        count: Number(count),
        thumbnail,
      });
      return successResponse(productCreated);
    } catch (err) {
      return errorResponse(new Error("Internal Server error"), 500);
    }
  };
