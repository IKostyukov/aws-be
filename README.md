### BE for AWS-TOYS-SHOP project

[Task 3](https://github.com/EPAM-JS-Competency-center/cloud-development-course-initial/blob/main/3_serverless_api/task.md)

- Product Service added
- getProductsList and getProductsById lambdas added
    endpoints: 
        getProductsList: https://p922jslhm7.execute-api.eu-west-1.amazonaws.com/products
        getProductsById: https://p922jslhm7.execute-api.eu-west-1.amazonaws.com/products/{id}
        example id path: https://p922jslhm7.execute-api.eu-west-1.amazonaws.com/products/7567ec4b-b10c-48c5-9345-fc73c48a80a2
- Async/await is used in lambda functions
- ES6 modules are used for Product Service implementation
- Webpack is configured for Product Service
- Main error scenarios are handled by API ("Product not found" error)

### FE part 

Link to repo: [https://github.com/VitaliiKopylov/nodejs-aws-fe/](https://github.com/VitaliiKopylov/nodejs-aws-fe/pull/2)
Link to site: [Toys shop](https://d1ousl87mpr9p8.cloudfront.net/)

