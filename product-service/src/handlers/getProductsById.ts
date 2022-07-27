import { IProductRepository } from "../utils/product.repository.interface";
import { errorResponse, successResponse } from "../utils/responseHandler";

export const getProductsByIdHandler =
  (productRepository: IProductRepository) => async (event, _context) => {
    const { id } = event.pathParameters;
    try {
      const product = await productRepository.getProductsById(id);
      if (product) {
        return successResponse(product);
      } else {
        return errorResponse(new Error("Product not found"), 404);
      }
    } catch (err) {
      return errorResponse(err);
    }
  };
