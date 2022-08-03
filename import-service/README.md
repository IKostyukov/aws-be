### BE for AWS-TOYS-SHOP project

[Task 5](https://github.com/EPAM-JS-Competency-center/cloud-development-course-initial/blob/main/5_integration_with_s3/task.md)

- [x] Created `importProductsFile` lambda: [Url for creating of Signed URL](https://os0byul55a.execute-api.eu-west-1.amazonaws.com/import)
- [x] Updated FE part: [Task-5 PR](https://github.com/VitaliiKopylov/nodejs-aws-fe/pull/4)
- [x] Created `importFileParser` lambda, each record shows in CloudWatch:   
![CloudWatch](/screenshots/cloudwatch.png)


### Extra
- [x] Async/await is used in lambda functions
- [x] At the end of the stream the lambda function should move the file from the `uploaded` folder into the `parsed` folder             
![Uploaded folder](/screenshots/uploaded-folder.png)        
![Parced folder](/screenshots/parsed-folder.png)

### TODO
- [ ] Unit tests