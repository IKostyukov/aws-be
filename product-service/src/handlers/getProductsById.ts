import { inMemoryDb } from "../db/product.inmemory.repository";
import { errorResponse, successResponse } from "../utils/responseHandler";

export const getProductsById = async (event, _context) => {
  const { id } = event.pathParameters;
  try {
    const product = await inMemoryDb.getProductsById(id);
    if (product) {
      return successResponse(product);
    } else {
      return errorResponse(new Error("Product not found"), 404);
    }
  } catch (err) {
    return errorResponse(err);
  }
};
