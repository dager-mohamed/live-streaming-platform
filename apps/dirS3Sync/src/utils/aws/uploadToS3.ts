import { awsS3Client } from './';
import { PutObjectCommand, CreateBucketCommand } from '@aws-sdk/client-s3';
import fs from 'node:fs';
import path from 'node:path';

export function uploadToS3(filePath: string) {
  if (!fs.existsSync(filePath)) return console.log('the file does not exist');
  if (!fs.lstatSync(filePath).isFile()) return console.log('invalid file');

  const fileContent = fs.readFileSync(filePath);

  awsS3Client
    .send(
      new PutObjectCommand({
        Bucket: process.env.AWS_S3_BUCKET,
        Key: path.basename(filePath),
        Body: fileContent,
      })
    )
    .catch((err) => console.error(err));
}
