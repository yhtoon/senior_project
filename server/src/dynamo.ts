const AWS = require('aws-sdk');
require('dotenv').config();

AWS.config.update({
  region: process.env.AWS_DEFAULT_REGION,
  accessKeyID: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

export const dynamoClient = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = "dynamoDB_test";

export const getCandidates = async () => {
  const params = {
    TableName: TABLE_NAME,
  };
  return await dynamoClient.scan(params).promise();
};

export const getCandidatesByID = async (id: string) => {
  const params = {
    TableName: TABLE_NAME,
    Key: { id },
  };
  return await dynamoClient.get(params).promise();
};
