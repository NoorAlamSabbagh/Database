// Lec(47)Paginated Read - Item Level Operations with AWS SDK
// below function is used to get multiple items from a table in a single request.

const async = require("async");
const _ = require("underscore");
const AWS = require("aws-sdk");
AWS.config.update({ region: 'ap-south-1' });

const docClient = new AWS.DynamoDB.DocumentClient();

var startKey = [];
var results = [];
var pages = 0;
async.doWhilst(
    //iteratee
    (callback)=>{
        let params = {
            TableName: 'td_notes_test',
            Limit: 3
        };

        if(!_.isEmpty(startKey)) {
            params.ExclusiveStartKey = startKey;
        }

        docClient.scan(params, (err, data)=>{
            if(err) {
                console.log(err);
                callback(err, {});
            } else {
                if(typeof data.LastEvaluatedKey !== 'undefined') {
                    startKey = data.LastEvaluatedKey;
                } else {
                    startKey = [];
                }

                if(!_.isEmpty(data.Items)){
                    results = _.union(results, data.Items);
                }

                pages++;

                callback(null, results);
            }
        });
    },

    //truth test
    ()=>{
        if(_.isEmpty(startKey)) {
            return false;
        } else {
            return true;
        }
    },

    //callback
    (err, data) => {
        if(err) {
            console.log(err);
        } else {
            console.log(data);
            console.log("Item Count", data.length);
            console.log("Pages", pages);
        }
    }
);

//
//(2)
// const AWS = require("aws-sdk");

// AWS.config.update({ region: "ap-south-1" });

// const docClient = new AWS.DynamoDB.DocumentClient();

// let startKey = undefined;
// let results = [];
// let pages = 0;

// function scanPage(callback) {
//     const params = {
//         TableName: "td_notes_test",
//         Limit: 3
//     };

//     if (startKey) {
//         params.ExclusiveStartKey = startKey;
//     }

//     docClient.scan(params, (err, data) => {
//         if (err) {
//             callback(err);
//             return;
//         }

//         console.log(`Page ${pages + 1}:`, data.Items);

//         results = results.concat(data.Items);
//         startKey = data.LastEvaluatedKey;
//         pages++;

//         callback(null);
//     });
// }

// function nextPage() {
//     return startKey !== undefined;
// }

// function runPagination() {
//     scanPage((err) => {
//         if (err) {
//             console.log(err);
//             return;
//         }

//         if (nextPage()) {
//             runPagination();
//         } else {
//             console.log("\nAll Items:");
//             console.log(results);
//             console.log("Item Count:", results.length);
//             console.log("Pages:", pages);
//         }
//     });
// }

// runPagination();