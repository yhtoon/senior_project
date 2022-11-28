const AWS = require('aws-sdk');

require('dotenv').config();

AWS.config.update({
  region: process.env.AWS_DEFAULT_REGION,
  accessKeyID: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

export const dynamoClient = new AWS.DynamoDB.DocumentClient();

export const getAnalyticsCommieTable = async (CAND_ID: string) => {
  const params = {
    TableName: "AnalyticsCommieTable",
    Key: { CAND_ID },
  };
  return await dynamoClient.get(params).promise();
};

export const getAnalyticsIndividualTable = async (CAND_ID: string) => {
  const params = {
    TableName: "AnalyticsIndividualTable",
    Key: { CAND_ID },
  };
  return await dynamoClient.get(params).promise();
};

export const getAnalyticsStateTable = async (CAND_ID: string) => {
  const params = {
    TableName: "AnalyticsStateTable",
    Key: { CAND_ID },
  };
  return await dynamoClient.get(params).promise();
};

export const getCommieInfoTable = async (COMM_ID: string) => {
  const params = {
    TableName: "CommieInfoTable",
    Key: { COMM_ID },
  };
  return await dynamoClient.get(params).promise();
};

export const getCompetitorTable = async (COMP_ID: string) => {
  const params = {
    TableName: "CompetitorTable",
    Key: { COMP_ID },
  };
  return await dynamoClient.get(params).promise();
};

export const getDoraTheExplorerTable = async (CAND_ID: string) => {
  const params = {
    TableName: "DoraTheExplorerTable",
    Key: { CAND_ID },
  };
  return await dynamoClient.get(params).promise();
};

export const getexploreFiltered = async (CID: string) => {
  const params = {
    TableName: "exploreFiltered",
    Key: { CID },
  };
  return await dynamoClient.get(params).promise();
};

export const getCommieMaster = async (COMM_ID: string) => {
  const params = {
    TableName: "CommunistParty",
    Key: { COMM_ID },
  };
  return await dynamoClient.get(params).promise();
};

export const getCandidateMaster = async (CID: string) => {
  const params = {
    TableName: "DoraTheExplorerTable",
    Key: { CID },
  };
  return await dynamoClient.get(params).promise();
};
