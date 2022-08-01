import logger from "../utils/logger";
import { errorResponse, successResponse } from "../utils/responseHandler";

export const importProductsFileHandler =
  (s3Service) => async (event, _context) => {
    try {
      logger(event);

      const querystring = event.queryStringParameters;

      if (!querystring?.name) {
        return errorResponse(
          new Error("Please provide name in querystring"),
          400
        );
      }

      if (!querystring.name.endsWith('.csv')) {
        return errorResponse(
          new Error("Please provide csv file"),
          400
        );
      }

      const bucketName = process.env.BUCKET_NAME;
      const key = `uploaded/${querystring.name}`;
      const signedUrlExpireSeconds = 60 * 5;

      const url = await s3Service.getSignedUrlPromise("putObject", {
        Bucket: bucketName,
        Key: key,
        Expires: signedUrlExpireSeconds,
        ContentType: 'text/csv',
      });

      return successResponse(url);
    } catch (err) {
      return errorResponse(new Error(err));
    }
  };
