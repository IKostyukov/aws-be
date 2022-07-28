import { getProductsByIdHandler } from "./handlers/getProductsById";
import { getProductsListHandler } from "./handlers/getProductsList";
import { createProductsHandler } from "./handlers/createProduct";

import { inMemoryDb } from "./db/product.inmemory.repository";
import AwsRdsRepository from "./db/product.aws-rds.repository";
import { client } from "./db/db.connection";

const { PG_PASSWORD } = process.env;

const awsRdsDb = new AwsRdsRepository(client);
client
  .connect()
  .then(() => console.log("connected"))
  .catch((err) => console.error("connection error", err.stack));

export const getProductsById = getProductsByIdHandler(awsRdsDb);
export const getProductsList = getProductsListHandler(awsRdsDb);
export const createProduct = createProductsHandler(awsRdsDb);
