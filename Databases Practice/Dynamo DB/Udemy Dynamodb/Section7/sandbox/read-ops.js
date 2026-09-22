// Lec(46)Read Operations - Item Level Operations with AWS SDK
const AWS = require("aws-sdk");
AWS.config.update({ region: 'ap-south-1' });

const docClient = new AWS.DynamoDB.DocumentClient();

//(1)
// docClient.get({
//     TableName: 'td_notes_test',
//     Key: {
//         user_id: 'A',
//         timestamp: 1
//     }
// }, (err, data)=>{
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

//(2)
// docClient.query({
//     TableName: 'td_notes_test',
//     KeyConditionExpression: "user_id = :uid",
//     ExpressionAttributeValues: {
//         ":uid": "A"
//     }
// }, (err, data)=>{
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });


//(3)
// docClient.scan({
//     TableName: 'td_notes_test',
//     FilterExpression: "cat = :cat",
//     ExpressionAttributeValues: {
//         ":cat": "general"
//     }
// }, (err, data)=>{
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });


//(4) Below function is used to get multiple items from multiple tables in a single request. 
// It is called batchGet operation.
docClient.batchGet({
    RequestItems: {
        'td_notes_test': {
          Keys: [
            {
               user_id: 'A',
               timestamp: 1
            },
            {
                user_id: 'B',
                timestamp: 2
            }
          ]
        },
        'td_notes_sdk': {
          Keys: [
            { 
                user_id: '11',
                timestamp: 1
            }
          ]
        }
    }
}, (err, data)=>{
    if(err) {
        console.log(err);
    } else {
        console.log(JSON.stringify(data, null, 2));
    }
});