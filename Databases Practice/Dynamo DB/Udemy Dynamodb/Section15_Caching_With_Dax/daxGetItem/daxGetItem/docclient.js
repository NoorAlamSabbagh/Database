// Lec76: Caching with DAX in DynamoDB Part 2
const AWS = require("aws-sdk");
AWS.config.update({ region: 'ap-south-1' });

// const AmazonDaxClient = require("amazon-dax-client");
// const dax = new AmazonDaxClient({
//     // endpoints: ['dax-notes-app.hllvre.clustercfg.dax.usw2.cache.amazonaws.com:8111'],
//     endpoints: ['daxs://dax-notes-app.0idmad.dax-clusters.ap-south-1.amazonaws.com'],
//     region: 'ap-south-1'
// });

// const docClient = new AWS.DynamoDB.DocumentClient({
//     service: dax
// });

// exports.handler = (event, context, callback) => {
//     docClient.get({
//         TableName: 'td_notes_test',
//         Key: {
//             user_id: event.user_id,
//             timestamp: parseInt(event.timestamp)
//         }
//     }, (err, data)=>{
//         if(err) {
//             callback(err);
//         } else {
//             callback(null, data);
//         }
//     });
// };


//
const AmazonDaxClient = require("amazon-dax-client");

const dynamodb = new AmazonDaxClient({
    endpoints: [
        "daxs://dax-notes-app.0idmad.dax-clusters.ap-south-1.amazonaws.com"
    ],
    region: "ap-south-1"
});

exports.handler = async () => {
    try {
        const data = await dynamodb.getItem({
            TableName: "td_notes_test",
            Key: {
                user_id: { S: "A" },
                timestamp: { N: "1" }
            }
        }).promise();

        console.log("DAX response:", data);

        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };
    } catch (error) {
        console.error("DAX error:", error);
        throw error;
    }
};