/////////////////////////////////////////////////////

// const { MongoClient } = require('mongodb');

// // MongoDB connection string
// const uri = 'mongodb://localhost:27017/my_database';

// // Connect to MongoDB
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// async function replaceDocument() {
// try {
// await client.connect();
// console.log('Connected to MongoDB');

// // Access the database and collection
// const database = client.db('my_database');
// const collection = database.collection('my_collection');

// // Query for the document to replace
// const query = { name: 'John Doe' };
// const replacementDocument = { name: 'Jane Smith', age: 35 };

// // Replace the document
// const result = await collection.replaceOne(query, replacementDocument);
// console.log('Document replaced:', result.modifiedCount);
// } catch (error) {
// console.error('Error replacing document:', error);
// } finally {
// await client.close();
// console.log('Disconnected from MongoDB');
// }
// }

// replaceDocument();





//////////////////////////
// const { MongoClient } = require('mongodb');

// // MongoDB connection string
// const uri = 'mongodb://localhost:27017/my_database';

// // Connect to MongoDB
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// async function deleteDocuments() {
// try {
// await client.connect();
// console.log('Connected to MongoDB');

// // Access the database and collection
// const database = client.db('my_database');
// const collection = database.collection('my_collection');

// // Delete documents matching a query
// const query = { age: { $gt: 30 } }; // Delete documents where age is greater than 30
// const result = await collection.deleteMany(query);
// console.log('Documents deleted:', result.deletedCount);
// } catch (error) {
// console.error('Error deleting documents:', error);
// } finally {
// await client.close();
// console.log('Disconnected from MongoDB');
// }
// }

// deleteDocuments();


/////////////////////////////////
// const { MongoClient } = require('mongodb');

// // MongoDB connection string
// const uri = 'mongodb://localhost:27017/my_database';

// // Connect to MongoDB
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// async function updateDocument() {
// try {
// await client.connect();
// console.log('Connected to MongoDB');

// // Access the database and collection
// const database = client.db('my_database');
// const collection = database.collection('my_collection');

// // Update a single document
// const filter = { name: 'John Doe' };
// const update = { $set: { age: 35 } };
// const result = await collection.updateOne(filter, update);
// console.log('Document updated:', result.modifiedCount);
// } catch (error) {
// console.error('Error updating document:', error);
// } finally {
// await client.close();
// console.log('Disconnected from MongoDB');
// }
// }

// updateDocument();





/////////////////////////////////////////////
// Updating MongoDB Documents by Using updateMany():
// The updateMany() method in MongoDB allows you to update multiple documents that match a specified filter. Let's explore how to use updateMany() to update documents:
// const { MongoClient } = require('mongodb');

// // MongoDB connection string
// const uri = 'mongodb://localhost:27017/my_database';

// // Connect to MongoDB
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// async function updateManyDocuments() {
// try {
// await client.connect();
// console.log('Connected to MongoDB');

// // Access the database and collection
// const database = client.db('my_database');
// const collection = database.collection('my_collection');

// // Update multiple documents
// const filter = { age: { $lt: 30 } };
// const update = { $set: { status: 'inactive' } };
// const result = await collection.updateMany(filter, update);
// console.log('Documents updated:', result.modifiedCount);
// } catch (error) {
// console.error('Error updating documents:', error);
// } finally {
// await client.close();
// console.log('Disconnected from MongoDB');
// }
// }

// updateManyDocuments();