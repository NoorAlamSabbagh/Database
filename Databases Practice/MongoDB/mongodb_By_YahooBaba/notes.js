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
// (1)show dbs
// (2)use database_name
// (3)db.dropDatabase()
// (4)db.createCollection("collection_name");
// (5)db.old_name.renameCollection("New Name");
// (6)db.collection_name.drop();
// (7)show collections
// (8)db.help();
// (9)db.collection_name.help();

// //<================Lec(5)======================>
// (1)db.collection_name.insertOne({field1: "Value", field2: "Value"});
// (2)db.collection_name.insertMany([
//     ({field1: "Value", field2: "Value"}),
//     ({field1: "Value", field2: "Value"})
// ])
// (3)db.collection_name.find();

//<================Lec(6)======================>
// MongoDB stores data in BSON (Binary JSON), which supports more data types than regular JSON.

// MongoDB Data Types
// | Data Type                           | Description                         | Example                                        |
// | ----------------------------------- | ----------------------------------- | ---------------------------------------------- |
// | String                              | Stores text                         | `"name": "Noor"`                               |
// | Number (Int/Double/Long/Decimal128) | Stores numeric values               | `"age": 29`, `"price": 99.99`                  |
// | Boolean                             | Stores true/false                   | `"isActive": true`                             |
// | Array                               | Stores multiple values              | `"skills": ["React", "Node.js"]`               |
// | Object (Embedded Document)          | Stores nested documents             | `"address": { "city": "Bangalore" }`           |
// | ObjectId                            | Unique identifier for each document | `"_id": ObjectId("689...")`                    |
// | Date                                | Stores date and time                | `"createdAt": ISODate("2026-07-29T10:00:00Z")` |
// | Null                                | Represents no value                 | `"middleName": null`                           |
// | Binary Data                         | Stores files or binary data         | Images, PDFs                                   |
// | Regular Expression                  | Stores regex patterns               | `/^Noor/i`                                     |
// | Timestamp                           | Stores internal timestamps          | `Timestamp()`                                  |
// | JavaScript                          | Stores JavaScript code              | `function(){ return true; }`                   |
// | Decimal128                          | High-precision decimal numbers      | `NumberDecimal("999.99")`                      |

// Examples
// 1. String
// {
//   "name": "Noor Alam"
// }
// 2. Number
// json
// {
//   "age": 29,
//   "salary": 50000,
//   "rating": 4.8
// }
// 3. Boolean
// {
//   "isVerified": true,
//   "isAdmin": false
// }
// 4. Array
// {
//   "skills": [
//     "React",
//     "Node.js",
//     "MongoDB"
//   ]
// }
// 5. Object (Embedded Document)
// {
//   "address": {
//     "city": "Bangalore",
//     "state": "Karnataka",
//     "pincode": 560037
//   }
// }
// 6. ObjectId
// {
//   "_id": ObjectId("6891f123456789abcdef1234")
// }
// MongoDB automatically creates the `_id` field if you don't provide one.
// 7. Date
// {
//   "createdAt": ISODate("2026-07-29T10:30:00Z")
// }

// Commonly used for:
// User registration date
// Order date
// Login time

// 8. Null
// {
//   "middleName": null
// }

// 9. Binary Data
// {
//   "profileImage": BinData(...)
// }
// Used for:
// Images
// PDFs
// Audio files
// (Usually, files are stored in services like Amazon S3, and only the file URL is stored in MongoDB.)

// 10. Regular Expression
// {
//   name: /^Noor/i
// }
// Finds:
// Noor
// noor
// NOOR

// 11. Timestamp
// {
//   lastModified: Timestamp()
// }
// Mostly used internally by MongoDB for replication and operation tracking.

// 12. JavaScript
// {
//   calculateTax: function () {
//     return this.price * 0.18;
//   }
// }
// Rarely used in modern applications.

// 13. Decimal128
// {
//   amount: NumberDecimal("12345.67")
// }

// Useful for:
// Banking
// Financial applications
// High-precision calculations

// Complete Example
// {
//   "_id": ObjectId("6891f123456789abcdef1234"),
//   "name": "Noor Alam",
//   "age": 29,
//   "isVerified": true,
//   "skills": [
//     "React",
//     "Node.js",
//     "MongoDB"
//   ],
//   "address": {
//     "city": "Bangalore",
//     "state": "Karnataka"
//   },
//   "salary": NumberDecimal("50000.50"),
//   "createdAt": ISODate("2026-07-29T10:30:00Z"),
//   "middleName": null
// }
 
// Most Commonly Used Data Types (Interview Focus)
// These are the ones you'll use in almost every MongoDB project:

// * **String** – Names, emails, titles
// * **Number** – Age, price, quantity
// * **Boolean** – `isActive`, `isVerified`
// * **Array** – Skills, tags, roles
// * **Object (Embedded Document)** – Address, profile
// * **ObjectId** – Unique document ID
// * **Date** – `createdAt`, `updatedAt`
// * **Null** – Missing or optional values

// ## Interview Answer (One Statement)
// > MongoDB uses BSON data types such as String, Number, Boolean, Array, Object, ObjectId, Date, Null, Binary, Regular Expression, Timestamp, JavaScript, and Decimal128. In day-to-day development, the most commonly used types are String, Number, Boolean, Array, Object, ObjectId, and Date.

// <================Lecture(7) MongoDB JSON Schema Validation======================>

// <================Lecture(7)======================>
// <================Lecture(7)======================>
// <================Lecture(7)======================>
// <================Lecture(7)======================>
// <================Lecture(7)======================>
// <================Lecture(7)======================>
// <================Lecture(7)======================>
// <================Lecture(7)======================>
// <================Lecture(7)======================>