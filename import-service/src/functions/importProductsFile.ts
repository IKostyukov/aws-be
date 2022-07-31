import logger from "../utils/logger";
import { errorResponse, successResponse } from "../utils/responseHandler";

export const importFileParserHandler =
  (s3Service) => async (event, _context) => {
    try {
      logger(event);
      return successResponse(event);
      //   logger(event);
      //   const product = await productRepository.getProductsById(id);
      //   if (product) {
      //     return successResponse(product);
      //   } else {
      //     return errorResponse(new Error("Product not found"), 404);
      //   }
    } catch (err) {
      return errorResponse(new Error(err));
    }
  };