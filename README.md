# Live streaming platform

## Installation

- Install packages <br/>
  ```npm install```
- Make sure docker & docker-compose installed

## Setup

- Copy the `.env.example` file and replace the filename with `.env`.

- Setup an AWS account:
  1. Fill in the aws crednetials inside the env file.
  2. Create an S3 bucket then fill the bucket name inside the .env file.
  3. Create a cloudfront distribution.
  4. IMPORTANT: if this error occured (`Your account must be verified before you can add new CloudFront resources`) while creating a cloudfront distribution, please see [this](https://maxrohde.com/2022/06/10/solving-error-creating-cloudfront-distribution-accessdenied-your-account-must-be-verified/). 
- Run ```npm run dev```
- Run the RTMP Server, HLS transcoder and the S3 directory sync [important]: <br/>
  - ```npm run docker```