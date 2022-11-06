const fs = require('fs')
const S3 = require('aws-sdk/clients/s3')
const { v4: uuidv4 } = require('uuid');
require('dotenv').config()

const bucketName = process.env.AWS_BUCKET_NAME
const region = process.env.AWS_BUCKET_REGION
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_KEY

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey
})

const uploadFile = (filePath) => {
  const fileStream = fs.createReadStream(filePath)

  const uploadParams = {
    Bucket: bucketName,
    Body: fileStream,
    Key: uuidv4()
  }

  return s3.upload(uploadParams).promise();
}

exports.uploadFile = uploadFile;