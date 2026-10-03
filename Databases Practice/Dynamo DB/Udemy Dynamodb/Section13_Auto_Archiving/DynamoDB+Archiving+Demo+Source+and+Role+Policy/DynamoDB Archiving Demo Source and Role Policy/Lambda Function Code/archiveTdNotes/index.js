'use strict';

const AWS = require("aws-sdk");
AWS.config.update({ region: 'us-west-2' });

const dynamodb = new AWS.DynamoDB();

exports.handler = (event, context, callback) => {
    //console.log('Received event:', JSON.stringify(event, null, 2));
    event.Records.forEach((record) => {
        console.log('Stream record: ', JSON.stringify(record, null, 2));
        
        if(record.eventName == 'REMOVE') {
            let params = {
                TableName: "td_notes_archive",
                Item: record.dynamodb.OldImage
            };
            
            dynamodb.putItem(params, (err, data)=>{
               if(err) {
                   console.log(err);
               } else {
                   console.log(data);
               }
            });
        }
    });
    callback(null, `Successfully processed ${event.Records.length} records.`);
};
