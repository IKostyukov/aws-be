import logger from "../utils/logger";
import { errorResponse, successResponse } from "../utils/responseHandler";
import csv from "csv-parser";

export const importFileParserHandler =
  (s3Service) => async (event, _context) => {

    for (const record of event.Records) {
      const bucketName = record.s3.bucket.name
      const key = record.s3.object.key;

      const params = {
        Bucket: bucketName,
        Key: key,
      };

      try {
        console.log(`Getting object ${key} from bucket ${bucketName}.`);
        const s3Stream = s3Service.getObject(params).createReadStream();

        await new Promise((resolve, reject) =>
          s3Stream
            .pipe(csv())
            .on("error", (err) => {
              reject(err);
            })
            .on("data", (data) => {
              console.log("CSV data::::::", data);
            })
            .on("end", resolve)
        );

        await s3Service
          .copyObject({
            Bucket: bucketName,
            CopySource: `${bucketName}/${key}`,
            Key: key.replace("uploaded", "parsed"),
          })
          .promise();

        await s3Service.deleteObject(params).promise();
        
        console.log(`Object ${key} from bucket ${bucketName} parced and relocated.`);
      } catch (err) {
        console.log(err);
        const message = `Error getting object ${key} from bucket ${bucketName}.`;
        throw new Error(message);
      }
    }
  };
