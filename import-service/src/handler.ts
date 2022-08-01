import AWS from "aws-sdk";

import { importFileParserHandler } from "./functions/importFileParser";
import { importProductsFileHandler } from "./functions/importProductsFile";

const REGION = "eu-west-1";

var s3 = new AWS.S3({ region: REGION });

export const importProductsFile = importProductsFileHandler(s3);
export const importFileParser = importFileParserHandler(s3);
