import { awsS3Client } from './';
import { DeleteObjectCommand } from '@aws-sdk/client-s3';
import path from 'node:path';

export function deleteFromS3(filePath: string) {
  awsS3Client
    .send(
      new DeleteObjectCommand({
        Bucket: process.env.AWS_S3_BUCKET,
        Key: path.basename(filePath),
      })
    )
    .catch((err) => console.log(err));
}
