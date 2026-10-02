//Lec59_AutoScaling in DynamoDB
//## Manual Scaling
// Manual Scaling Limits
// . No limits on scaling up
// . Up to 4 scale downs per calendar day (UTC Timezone)
// · 1 extra scale down if no scale down in last 4 hours (i.e. 5 more scale downs per day)
// . Effectively, 9 scale downs per day if timed correctly


//Lec60_DynamoDB Accelerator (DAX)
// ### DynamoDB Accelerator (DAX) — Short Notes
// DAX = fully managed in-memory cache for DynamoDB.
// Used to make DynamoDB reads much faster (microsecond latency).
// DAX sits between your application and DynamoDB.

// Flow:
// `Application → DAX → DynamoDB`
// Frequently requested data is stored in DAX cache.
// Cache hit: DAX returns data directly → very fast.
// Cache miss: DAX gets data from DynamoDB and caches it.
// Helps reduce read load and cost on DynamoDB.
// Supports DynamoDB APIs such as `GetItem`, `Query`, and `Scan`.
// Applications generally need minimal code changes to use DAX.
// DAX is mainly useful for read-heavy applications.
// Remember:
// DynamoDB = database | DAX = cache for DynamoDB

// Lec61_DynamoDB Streams And DynamoDB Triggers with AWS Lambda
// DynamoDB Streams = time-ordered sequence of item-level changes in a DynamoDB table.
// Streams can be used to trigger AWS Lambda functions.
// Kinesis Streams can also be used to process DynamoDB Streams. 
//Kinesis is a plateform for streaming data on AWS. It can be used to collect, process, and analyze real-time data streams. Kinesis Streams can be used to process DynamoDB Streams for more complex processing needs.


