# Live streaming platform

## Installation

- Install packages <br/>
  ```npm install```

## Setup

- Copy the `.env.example` file and replace the filename with `.env`.

- Setup an AWS account:
  1. Fill in the aws crednetials inside the env file.
  2. Create an S3 bucket.
  3. Create a cloudfront distribution.
  4. IMPORTANT: if this error occured (`Your account must be verified before you can add new CloudFront resources`) while create a cloudfront distribution, please see [this](https://maxrohde.com/2022/06/10/solving-error-creating-cloudfront-distribution-accessdenied-your-account-must-be-verified/). 
- Run the backend app in development mode <br/>
  ```npm run dev:backend```
- Run the frontend app in development mode <br/>
  ```npm run dev:web```
- Run the RTMP Server & HLS transcoder [important]: <br/>
  1. ```docker-compose build``` <br/>
  2. ```docker-compose up```