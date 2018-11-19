'use strict';

const AWS = require('aws-sdk');
const s3 = new AWS.S3();

module.exports.getRequest = async (event, context) => {
  s3.listBuckets( (err,data) => {
    if(err)
      console.log('error',error);
    const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Creditials': true
      },
      body: JSON.stringify({
        message: data
      })
    }
      
  });

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
