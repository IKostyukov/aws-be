### BE for AWS-TOYS-SHOP project

[Task 6](https://github.com/EPAM-JS-Competency-center/cloud-development-course-initial/blob/main/6_async_microservices_communication/task.md)

- [x] File serverless.yml contains configuration for `catalogBatchProcess` function
- [x] File serverless.yml contains policies to allow lambda `catalogBatchProcess` function to interact with `SNS` and `SQS`
- [x] File serverless.yml contains configuration for SQS `CreateProductsSqsQue`
- [x] File serverless.yml contains configuration for SNS Topic `CreatedProductsSnsTopic` and email subscription
- [x] set a Filter Policy for SNS `CreatedProductsSnsTopic` in serverless.yml and create an additional email subscription to distribute messages to different emails depending on the filter for any product attribute

### TODO
- [ ] Unit tests
