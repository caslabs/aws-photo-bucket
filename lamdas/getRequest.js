'use strict';

const AWS = require('aws-sdk');
const s3 = new AWS.S3();

module.exports.getRequest = async (event, context, callback) => {
  var bucketParams = {
    Bucket: 'treasure-chest-capstone'
  }
  
  s3.listObjects(bucketParams, (err,data) => {
    if(err) {
      console.log('error',error);
    }
    console.log(data);
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


    callback(null, response);
  
  });

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
