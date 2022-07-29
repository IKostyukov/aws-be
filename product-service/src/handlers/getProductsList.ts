import { errorResponse, successResponse } from "../utils/responseHandler";
import { IProductRepository } from "../utils/product.repository.interface";
import logger from "../utils/logger";

export const getProductsListHandler =
  (productRepository: IProductRepository) => async (event, _context) => {
    try {
      logger(event);
      const products = await productRepository.getProductsList();
      if (!!products) {
        return successResponse(products);
      } else {
        return errorResponse(new Error("Products not found"), 404);
      }
    } catch (err) {
      return errorResponse(new Error("Internal Server error"), 500);
    }
  };
