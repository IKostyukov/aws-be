import { IProductRepository } from "../utils/product.repository.interface";

export const catalogBatchProcessHandler =
  (productRepository: IProductRepository, snsService) =>
  async (event, _context) => {
    try {
      for (const product of event.Records) {
        const { title, description, price, count, thumbnail } = JSON.parse(
          product.body
        );
        const productCreated = await productRepository.createProduct({
          title,
          description,
          price: Number(price),
          count: Number(count),
          thumbnail,
        });
        console.log("Product created::::::", productCreated);
        const isElectricValue = productCreated.title.includes("Electric") ? 'is-electric' : 'is-non-electric'
        await snsService
          .publish({
            Subject: "New product created",
            Message: JSON.stringify(productCreated),
            TopicArn: process.env.SNS_ARN,
            MessageAttributes: {
              isElectric: {
                DataType: "String",
                StringValue: isElectricValue,
              },
            },
          })
          .promise();
        console.log("published to sns topic");
      }
    } catch (err) {
      throw err;
    }
  };
