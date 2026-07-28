//<================Lec(1)======================>
// (1)What is MongoDB?
// MongoDB is a NoSQL, document-oriented database.
// It stores data in BSON (Binary JSON) format.
// It is schema-flexible, scalable, and high-performance.

// MongoDB Structure
// Database
//    ↓
// Collection
//    ↓
// Document
//    ↓
// Fields (Key-Value)

// SQL vs MongoDB

// | SQL      | MongoDB    |
// | -------- | ---------- |
// | Database | Database   |
// | Table    | Collection |
// | Row      | Document   |
// | Column   | Field      |

// Key Features
// * NoSQL database
// * Flexible schema
// * Fast read/write
// * Supports indexing
// * Replication (High Availability)
// * Sharding (Horizontal Scaling)
// * Aggregation Framework

// #CRUD Operations
// #Create
// javascript
// db.users.insertOne({ name: "Noor", age: 29 });

// #Read
// javascript
// db.users.find();
// db.users.findOne({ name: "Noor" });

// #Update
// javascript
// db.users.updateOne(
//   { name: "Noor" },
//   { $set: { age: 30 } }
// );

// # Delete
// javascript
// db.users.deleteOne({ name: "Noor" });

// # JSON vs BSON

// | JSON                       | BSON                     |
// | -------------------------- | ------------------------ |
// | JavaScript Object Notation | Binary JSON              |
// | Text format                | Binary format            |
// | Human-readable             | Machine-readable         |
// | Used for data exchange     | Used for MongoDB storage |
// | Limited data types         | Supports more data types |
// | Slower parsing             | Faster parsing           |

// ## BSON Extra Data Types

// * ObjectId
// * Date
// * Timestamp
// * Binary
// * Decimal128
// * Int32 / Int64
// * Regular Expression

// #Why MongoDB Uses BSON?
// * Faster serialization/deserialization
// * Efficient storage
// * Better indexing
// * Supports more data types than JSON

// # Advantages
// * Flexible schema
// * High performance
// * Easy horizontal scaling
// * High availability
// * Stores nested documents

// # Disadvantages
// * Limited joins compared to SQL
// * Data duplication may increase storage
// * Not ideal for highly relational data

// # Interview Points
// * MongoDB is a NoSQL document database.
// * Data is stored as BSON documents.
// * Collections can contain documents with different structures.
// * Every document has a unique `_id` field by default.
// * Replication provides high availability.
// * Sharding enables horizontal scaling.
// * Aggregation Framework is used for complex data processing.

// #One-Line Difference
// * JSON: Human-readable text format used for data exchange.
// * BSON: Binary format used internally by MongoDB for faster storage, querying, and support for additional data types.

//<================Lec(2)======================>
//<================Lec(4)======================>
(1)show dbs
(2)use database_name
(3)db.dropDatabase()
(4)db.createCollection("collection_name");
(5)db.old_name.renameCollection("New Name");
(6)db.collection_name.drop();
(7)show collections
(8)db.help();
(9)db.collection_name.help();

//<================Lec(5)======================>
(1)db.collection_name.insertOne({field1: "Value", field2: "Value"});
(2)db.collection_name.insertMany([
    ({field1: "Value", field2: "Value"}),
    ({field1: "Value", field2: "Value"})
])
(3)db.collection_name.find();