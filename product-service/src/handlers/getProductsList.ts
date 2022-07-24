import { inMemoryDb } from "../db/product.inmemory.repository";
import { errorResponse, successResponse } from "../utils/responseHandler";

export const getProductsList = async (event, _context) => {
  try {
    const products = await inMemoryDb.getProductsList();
    return successResponse(products)
  } catch (err) {
    return errorResponse(err)
  }
};
