//Lec65: Implementing Cross Region Replication with Global Tables in DynamoDB
//Lec66: A quick note on working with multiple AWS regions
// A quick note on working with multiple AWS regions
// Kindly use the attached code snippet for your hands-on practice.
// In the next video I'm using AWS.config.update to change the AWS region, which doesn't have effect on already instantiated objects.
// So its better to instantiate a separate object to work with another AWS region. The updated code simply uses a new DynamoDB DocumentClient class object to work with a new region.
// You could either instantiate a separate object with explicit region code in the class constructor like so:

//Lec67: Working with Global Tables in DynamoDB
