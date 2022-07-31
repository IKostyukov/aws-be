import AWS from 'aws-sdk';

import { importFileParserHandler } from "./functions/importFileParser";

const REGION = "eu-west-1";

var s3 = new AWS.S3({ region: REGION });

export const importFileParser = importFileParserHandler(s3);
