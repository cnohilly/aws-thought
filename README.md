# AWS Deep Thought

This project was to refactor an existing project, Deep Thought, into using Amazon Web Services. The original project would allow users to create posts with a title and a thought (text) and this data would be managed using MongoDB. The refactored project using the S3 and DynamoDB services to handle data and uses EC2 to launch and run the application. S3 is used for content management, allowing users to upload photos to attach to their posts which are then stored using S3 and a reference to the asset is stored with the post data in the DynamoDB database. The front-end is written using React, while the back-end is using Node and Express which are then run and hosted using a launched instance with EC2. 

## Application

- The launched application can be found at this location: <a href="http://18.191.185.164/" rel="noopener noreferrer" target="_blank">Deep Thoughts - AWS</a>

- A demonstration of the application can be seen below.
![GIF demonstrating the project](https://user-images.githubusercontent.com/80245658/232674982-b7926941-716a-4755-bd85-3f9985a9da4d.gif)
