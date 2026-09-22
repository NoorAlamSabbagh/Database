// Lec(44)Conditional Write Operations - Item Level Operations with AWS SDK

const AWS = require("aws-sdk");
AWS.config.update({ region: 'ap-south-1' });

const docClient = new AWS.DynamoDB.DocumentClient();

// docClient.put({
//     TableName: 'td_notes_sdk',
//     Item: {
//         user_id: 'bb',
//         timestamp: 1,
//         title: 'changed title',
//         content: 'changed content'
//     }
// }, (err, data)=>{
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });


//(2)
// docClient.update({
//     TableName: 'td_notes_sdk',
//     Key: {
//         user_id: 'bb',
//         timestamp: 1
//     },
//     UpdateExpression: 'set #t = :t',
//     ExpressionAttributeNames: {
//         '#t': 'title'
//     },
//     ExpressionAttributeValues: {
//         ':t': "Updated title"
//     }
// }, (err, data)=>{
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });


//(3)
// docClient.delete({
//     TableName: 'td_notes_sdk',
//     Key: {
//         user_id: 'bb',
//         timestamp: 1
//     }
// }, (err, data)=>{
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });


//(4)
docClient.batchWrite({
    RequestItems: {
        'td_notes_sdk': [
            {
                DeleteRequest: {
                    Key: {
                        user_id: 'bb',
                        timestamp: 2
                    }
                }
            },
            {
                PutRequest: {
                    Item: {
                        user_id: '11',
                        timestamp: 1,
                        title: 'Title 11',
                        content: 'Content 11'
                    }
                }
            },
            {
                PutRequest: {
                    Item: {
                        user_id: '22',
                        timestamp: 2,
                        title: 'Title 22',
                        content: 'Content 22'
                    }
                }
            }
        ]
    }
}, (err, data)=>{
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
});