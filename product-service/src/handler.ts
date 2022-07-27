import { getProductsByIdHandler } from "./handlers/getProductsById";
import { getProductsListHandler } from "./handlers/getProductsList";

// import { inMemoryDb } from "./db/product.inmemory.repository";
import { awsRdsDb } from "./db/product.aws-rds.repository";

export const getProductsById = getProductsByIdHandler(awsRdsDb);
export const getProductsList = getProductsListHandler(awsRdsDb);
