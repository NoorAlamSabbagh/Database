// Lec(45)Atomic Counters - Item Level Operations with AWS SDK
// Item LevelOperations with AWS SDK
// Atomic counters are a way to increment or decrement numeric attributes in DynamoDB without having to read the item first. This is useful for scenarios where you want to keep track of counts, such as page views, likes, or any other metric that needs to be updated frequently.
// In this example, we will use the AWS SDK for JavaScript to increment a "views" attribute in a DynamoDB table called "td_notes_sdk". The item we will update has a primary key composed of "user_id" and "timestamp".


// const AWS = require("aws-sdk");
// AWS.config.update({ region: 'ap-south-1' });

// const docClient = new AWS.DynamoDB.DocumentClient();

// docClient.update({
//     TableName: 'td_notes_sdk',
//     Key: {
//         user_id: 'ABC',
//         timestamp: 1
//     },
//     UpdateExpression: 'set #v = #v + :incr',
//     ExpressionAttributeNames: {
//         '#v': 'views'
//     },
//     ExpressionAttributeValues: {
//         ':incr': 1
//     }
// }, (err, data)=> {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

//
//(2)
const AWS = require("aws-sdk");

AWS.config.update({
  region: "ap-south-1"
});

const dynamodb = new AWS.DynamoDB.DocumentClient();

const params = {
  TableName: "td_notes_sdk",

  Key: {
    user_id: "ABC",
    timestamp: 1
  },

  UpdateExpression: "SET #views = #views + :increment",

  ExpressionAttributeNames: {
    "#views": "views Number"
  },

  ExpressionAttributeValues: {
    ":increment": 1
  },

  ReturnValues: "UPDATED_NEW"
};

dynamodb.update(params, (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Updated views:", data);
  }
});