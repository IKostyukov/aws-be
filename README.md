### BE for AWS-TOYS-SHOP project

[Task 4](https://github.com/EPAM-JS-Competency-center/cloud-development-course-initial/blob/main/4_integration_with_database/task.md)

- [x] Created tables in AWS RDS with sql script
- [x] Added lambda’s environment variables to lambdas with `serverless-dotenv-plugin`
- [x] Updated `getProductsList` lambda: [GET all products](https://ntw0yk6kcf.execute-api.eu-west-1.amazonaws.com/products)
- [x] Updated `getProductsById` lambda: [GET single product](https://ntw0yk6kcf.execute-api.eu-west-1.amazonaws.com/products/b25ade72-fe9c-413b-a372-a7020a6a378d)
- [x] Created `createProduct` lambda: URL `https://ntw0yk6kcf.execute-api.eu-west-1.amazonaws.com/products`
- [x] Updated FE part: [Task-4 PR](https://github.com/VitaliiKopylov/nodejs-aws-fe/pull/3)
### Extra
- [x] POST /products lambda functions returns error 400 status code if product data is invalid
- [x] All lambdas return error 500 status code on any error (DB connection, any unhandled error in code)
- [x] All lambdas do console.log for each incoming requests and their arguments - `logger` function
- [x] Transaction based creation of product

### TODO
- [ ] SWAGGER
- [ ] Unit tests