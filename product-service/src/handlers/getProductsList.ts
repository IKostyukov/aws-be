import { errorResponse, successResponse } from "../utils/responseHandler";
import { IProductRepository } from "../utils/product.repository.interface";

import { awsRdsDb } from "../db/product.aws-rds.repository";

export const getProductsListHandler =
  (productRepository: IProductRepository) => async (event, _context) => {
    try {
      const products = await productRepository.getProductsList();
      if (products) {
        return successResponse(products);
      } else {
        return errorResponse(new Error("Products not found"), 404);
      }
    } catch (err) {
      return errorResponse(err);
    }
  };
