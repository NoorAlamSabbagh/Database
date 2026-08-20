//<================Lec(1)======================>
// (1)What is MongoDB?
// MongoDB is a NoSQL, document-oriented database.
// It stores data in BSON (Binary JSON) format.
// It is schema-flexible, scalable, and high-performance.

// ## BSON vs JSON
// JSON = a human-readable data format.
// BSON = a binary format designed and used by MongoDB to store documents.
// | Feature                    | JSON                              | BSON                          |
// | -------------------------- | --------------------------------- | ----------------------------- |
// | Full form                  | JavaScript Object Notation        | Binary JSON                   |
// | Format                     | Text                              | Binary                        |
// | Human readable             | ✅ Yes                             | ❌ No                          |
// | Used by MongoDB internally | ❌                                 | ✅ Yes                         |
// | Data types                 | Limited                           | More data types               |
// | Supports `Date`            | ❌ Native support                  | ✅                             |
// | Supports `ObjectId`        | ❌                                 | ✅                             |
// | Supports Binary data       | ❌                                 | ✅                             |
// | Size                       | Generally smaller for simple text | Can be larger due to metadata |
// | Parsing                    | Text parsing                      | Binary decoding               |
// #Example
// JSON:
// {
//   "name": "Noor",
//   "age": 29
// }
// BSON:
// MongoDB converts/stores the document in a binary representation with information about field names, values, types, and document length.
// #Important MongoDB point
// When you send this:
// {
//   name: "Noor",
//   age: 29,
//   createdAt: new Date()
// }
// MongoDB stores it as BSON, not plain JSON.
// BSON can represent MongoDB-specific types such as:
// ObjectId("...")
// Date(...)
// Decimal128(...)
// Binary(...)
// #Easy way to remember
// JSON → text format for exchanging data
// BSON → binary format MongoDB uses to store and work with data
// Think of it like:
// JSON → readable document**
// ⬇️
// BSON → MongoDB's optimized binary version of that document
 
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
// validator: {
//   $jsonSchema: {
//     bsonType: "object",
//     required: ["name", "salary", "department"],
//     properties: {
//       name: {
//         bsonType: "string"
//       },
//       salary: {
//         bsonType: "double"
//       },
//       department: {
//         enum: ["HR", "IT", "Finance"]
//       }
//     }
//   }
// }


// //
// db.createCollection("students", {
//   validator: {
//     $jsonSchema: {
//       bsonType: "object",
//       title: "Student Object Validation",
//       required: ["name", "age", "course"],
//       properties: {
//         name: {
//           bsonType: "string",
//           description: "Name must be a string and is required",
//           minLength: 3,
//           maxLength: 50
//         },
//         age: {
//           bsonType: "int",
//           description: "Age must be an integer and is required",
//           minimum: 18,
//           maximum: 60
//         },
//         course: {
//           bsonType: "string",
//           description: "Course must be a string and is required",
//           enum: ["MERN", "Java", "Python", "Data Science"]
//         },
//         email: {
//           bsonType: "string",
//           description: "Email must be a valid string",
//           pattern: "^.+@.+\\..+$"
//         },
//         isActive: {
//           bsonType: "bool",
//           description: "isActive must be true or false"
//         },
//         createdAt: {
//           bsonType: "date",
//           description: "Created date must be a valid date"
//         }
//       }
//     }
//   },
//   validationLevel: "strict",
//   validationAction: "error"
// });

// <================Lecture(8)=MongoDB Update & Replace Documents=====================>
// #MongoDB Update & Replace Commands
// 1. updateOne()
// Updates the first matching document.
// Syntax:
// db.collection.updateOne(
//   { filter },
//   { $set: { field: value } }
// )

// Example:
// db.students.updateOne(
//   { name: "Noor" },
//   { $set: { age: 30 } }
// );

// ✅ Updates only the first matching document.
// 2. updateMany()
// Updates all matching documents.
// Syntax:
// db.collection.updateMany(
//   { filter },
//   { $set: { field: value } }
// )
// Example:
// db.students.updateMany(
//   { course: "MERN" },
//   { $set: { isActive: true } }
// );
// ✅ Updates all students with the `MERN` course.
// 3. `replaceOne()`
// Replaces the entire document (except `_id`).
// Syntax:
// db.collection.replaceOne(
//   { filter },
//   { newDocument }
// )
// Example:
// db.students.replaceOne(
//   { name: "Noor" },
//   {
//     name: "Noor Alam",
//     age: 29,
//     course: "MERN",
//     email: "noor@gmail.com"
//   }
// );
// ⚠️ All old fields (except `_id`) are removed if they are not included in the new document.
// Update vs Replace

// | Feature                                | `updateOne()` | `replaceOne()`                      |
// | -------------------------------------- | ------------- | ----------------------------------- |
// | Updates specific fields                | ✅ Yes         | ❌ No                                |
// | Replaces entire document               | ❌ No          | ✅ Yes                               |
// | Uses update operators (`$set`, `$inc`) | ✅ Yes         | ❌ No                                |
// | Keeps existing fields                  | ✅ Yes         | ❌ Removes fields not in replacement |

// #Common Update Operators
// | Operator    | Purpose                                     | Example                              |
// | ----------- | ------------------------------------------- | ------------------------------------ |
// | `$set`      | Set/update a field                          | `{ $set: { age: 30 } }`              |
// | `$unset`    | Remove a field                              | `{ $unset: { phone: "" } }`          |
// | `$inc`      | Increment a number                          | `{ $inc: { marks: 5 } }`             |
// | `$mul`      | Multiply a number                           | `{ $mul: { salary: 2 } }`            |
// | `$rename`   | Rename a field                              | `{ $rename: { phone: "mobile" } }`   |
// | `$push`     | Add to an array                             | `{ $push: { skills: "MongoDB" } }`   |
// | `$pull`     | Remove from an array                        | `{ $pull: { skills: "Java" } }`      |
// | `$addToSet` | Add to an array only if not already present | `{ $addToSet: { skills: "React" } }` |
// ## Interview Answer
// >`updateOne()` updates specific fields in the first matching document, `updateMany()` updates all matching documents, and `replaceOne()` replaces the entire document (except `_id`) with a new one. `update` commands use operators like `$set`, while `replaceOne()` requires a complete replacement document.

// <================Lecture(9)Delete======================>
// MongoDB provides two main delete methods:
// 1. `deleteOne()`
// 2. `deleteMany()`
// 1. Delete One Document

// Deletes the first matching document
// Syntax
// db.collection.deleteOne({ filter })
// #Example
// Delete a student by name:
// db.students.deleteOne({
//   name: "Noor Alam"
// });
// Or delete by `_id`:
// db.students.deleteOne({
//   _id: ObjectId("6a6d5a4d7d401e10d0f7942b")
// });

// Output:
// {
//   acknowledged: true,
//   deletedCount: 1
// }
// # 2. Delete Multiple Documents
// Deletes all matching documents.
// #Syntax
// db.collection.deleteMany({ filter })

// Delete all MERN students:
// db.students.deleteMany({
//   course: "MERN"
// });

// Output:
// {
//   acknowledged: true,
//   deletedCount: 5
// }

// # 3. Delete All Documents
// Deletes every document in the collection but keeps the collection.
// db.students.deleteMany({})

// # 4. Drop the Entire Collection
// Deletes the collection and all its documents.

// db.students.drop()
// # Difference

// | Command          | What it does                                |
// | ---------------- | ------------------------------------------- |
// | `deleteOne()`    | Deletes the first matching document         |
// | `deleteMany()`   | Deletes all matching documents              |
// | `deleteMany({})` | Deletes all documents, keeps the collection |
// | `drop()`         | Deletes the entire collection               |
// ## Verify

// After deleting, check the remaining data:
// db.students.find()

// Count documents
// db.students.countDocuments()
// #Interview Answer
// >`deleteOne()` removes the first matching document, while `deleteMany()` removes all matching documents. 
// If you use `deleteMany({})`, all documents are deleted but the collection remains. To remove the collection itself, use `drop()`.

// <================Lecture(10)Find Document======================>
// ## MongoDB `find()` — Short Notes
// Assume collection:
// db.students
// | Method / Operator  | Example                                        | Meaning                        |
// | ------------------ | ---------------------------------------------- | ------------------------------ |
// | `find()`           | `db.students.find()`                           | Find all documents             |
// | `findOne()`        | `db.students.findOne()`                        | Find first document            |
// | Filter             | `db.students.find({age: 29})`                  | Find matching documents        |
// | `$gt`              | `find({age: {$gt: 25}})`                       | Greater than                   |
// | `$gte`             | `find({age: {$gte: 25}})`                      | Greater than/equal             |
// | `$lt`              | `find({age: {$lt: 30}})`                       | Less than                      |
// | `$lte`             | `find({age: {$lte: 30}})`                      | Less than/equal                |
// | `$eq`              | `find({age: {$eq: 29}})`                       | Equal                          |
// | `$ne`              | `find({age: {$ne: 29}})`                       | Not equal                      |
// | `$in`              | `find({course: {$in:["MERN","Java"]}})`        | Matches any value              |
// | `$nin`             | `find({course: {$nin:["MERN","Java"]}})`       | Doesn't match values           |
// | `$and`             | `find({$and:[{age:29},{course:"MERN"}]})`      | Both conditions                |
// | `$or`              | `find({$or:[{age:29},{course:"MERN"}]})`       | Either condition               |
// | `$exists`          | `find({phone: {$exists:true}})`                | Field exists                   |
// | `$regex`           | `find({name: {$regex:"^Noor"}})`               | Pattern matching               |
// | `$size`            | `find({skills: {$size:3}})`                    | Array size                     |
// | `$elemMatch`       | `find({skills: {$elemMatch:{$eq:"MongoDB"}}})` | Match array element            |
// | Nested field       | `find({"address.city":"Bangalore"})`           | Search nested field            |
// | `_id`              | `find({_id:ObjectId("...")})`                  | Find by ID                     |
// | `sort()`           | `find().sort({age:1})`                         | `1` ascending, `-1` descending |
// | `limit()`          | `find().limit(5)`                              | Return first 5                 |
// | `skip()`           | `find().skip(5)`                               | Skip first 5                   |
// | `countDocuments()` | `countDocuments({age:29})`                     | Count matching documents       |
// | `distinct()`       | `distinct("course")`                           | Get unique values              |

// ## Projection Short Notes
// Projection = Decide which fields to show.
// db.students.find(
//   {},
//   {name: 1, age: 1, _id: 0}
// )
// | Projection             | Meaning                  |
// | ---------------------- | ------------------------ |
// | `{name: 1}`            | Include `name`           |
// | `{name: 1, age: 1}`    | Include `name`, `age`    |
// | `{name: 1, _id: 0}`    | Include name, exclude ID |
// | `{email: 0}`           | Exclude email            |
// | `{email: 0, phone: 0}` | Exclude email and phone  |

// ### Important
// 1 = INCLUDE
// 0 = EXCLUDE
// Don't normally mix `1` and `0`, except `_id`.

// ## Useful Combination
// db.students
//   .find(
//     {age: {$gte: 18}},
//     {name: 1, course: 1, _id: 0}
//   )
//   .sort({age: -1})
//   .skip(5)
//   .limit(10)
// Meaning:
// >Find students age 18+, show only name/course, sort by age descending, skip 5, and return 10.

// <================Lecture(11)Comparison Operators======================>
// ## MongoDB Comparison Operators — Short Notes
// Comparison operators are used to **compare values** in a query.

// Assume:
// db.students.find()
// | Operator | Meaning                 | Example                                  |
// | -------- | ----------------------- | ---------------------------------------- |
// | `$eq`    | Equal to                | `{ age: { $eq: 29 } }`                   |
// | `$ne`    | Not equal to            | `{ age: { $ne: 29 } }`                   |
// | `$gt`    | Greater than            | `{ age: { $gt: 25 } }`                   |
// | `$gte`   | Greater than or equal   | `{ age: { $gte: 25 } }`                  |
// | `$lt`    | Less than               | `{ age: { $lt: 30 } }`                   |
// | `$lte`   | Less than or equal      | `{ age: { $lte: 30 } }`                  |
// | `$in`    | Matches any value       | `{ course: { $in: ["MERN", "Java"] } }`  |
// | `$nin`   | Doesn't match any value | `{ course: { $nin: ["MERN", "Java"] } }` |

// # Examples
// 1.Equal
// db.students.find({ age: { $eq: 29 } })
// 2. Not equal
// db.students.find({ age: { $ne: 29 } })
// 3. Greater than
// db.students.find({ age: { $gt: 25 } })
// 4. Greater than or equal
// db.students.find({ age: { $gte: 25 } })
// 5. Less than
// db.students.find({ age: { $lt: 30 } })
// 6. Less than or equal
// db.students.find({ age: { $lte: 30 } })

// 7. `$in`
// db.students.find({
//   course: { $in: ["MERN", "Java"] }
// })
// Means:
// 8. `$nin`
// db.students.find({
//   course: { $nin: ["MERN", "Java"] }
// })
// ### Easy Memory Trick
// $eq   → =
// $ne   → ≠
// $gt   → >
// $gte  → ≥
// $lt   → <
// $lte  → ≤
// $in   → OR from a list
// $nin  → NOT in a list

// <================Lecture(12)Logic Operators======================>
// ## MongoDB Logical Operators — Short Notes
// Logical operators are used to combine multiple conditions.
// | Operator | Meaning                                   | Example                                   |
// | -------- | ----------------------------------------- | ----------------------------------------- |
// | `$and`   | All conditions must be true           | `{ $and: [{age: 29}, {course: "MERN"}] }` |
// | `$or`    | At least one condition must be true   | `{ $or: [{age: 29}, {course: "MERN"}] }`  |
// | `$nor`   | None of the conditions should be true | `{ $nor: [{age: 29}, {course: "MERN"}] }` |
// | `$not`   | Negates a condition                   | `{ age: { $not: { $gt: 29 } } }`          |

// # 1. `$and`
// Both conditions must match:
// db.students.find({
//   $and: [
//     { age: 29 },
//     { course: "MERN" }
//   ]
// })

// Meaning: age = 29 AND course = MERN.
// You can usually write this more simply:
// db.students.find({
//   age: 29,
//   course: "MERN"
// })

// ### 2. `$or`
// At least one condition must match:
// db.students.find({
//   $or: [
//     { age: 29 },
//     { course: "MERN" }
//   ]
// })

// Meaning: age = 29 OR course = MERN.
// ### 3. `$nor`

// None of the conditions should match:
// db.students.find({
//   $nor: [
//     { age: 29 },
//     { course: "MERN" }
//   ]
// })

// Meaning: age is not 29 **AND** course is not MERN.
// # 4. `$not`

// Reverses a condition:
// db.students.find({
//   age: {
//     $not: { $gt: 29 }
//   }
// })

// Meaning: age is NOT greater than 29.
// $gt  → >
// $not + $gt → NOT >

// ### Easy Memory Trick
// $and → BOTH
// $or  → ANY ONE
// $nor → NONE
// $not → OPPOSITE


// <================Lecture(13)Query Operators======================>
// ## MongoDB Query Operators
// #1. Comparison Operators

// Used to compare values.
// $eq    // equal
// $ne    // not equal
// $gt    // greater than
// $gte   // greater than or equal
// $lt    // less than
// $lte   // less than or equal
// $in    // matches any value
// $nin   // doesn't match values

// Example:
// db.students.find({ age: { $gte: 18 } })

// ### 2. Logical Operators

// Used to combine conditions.
// $and
// $or
// $nor
// $not

// Example:
// db.students.find({
//   $or: [
//     { age: 29 },
//     { course: "MERN" }
//   ]
// })

// ### 3. Element Operators
// Check whether a field exists or its data type.
// $exists
// $type

// Examples:
// db.students.find({
//   phone: { $exists: true }
// })

// db.students.find({
//   age: { $type: "int" }
// })
// ### 4. Evaluation Operators
// Perform more advanced matching.
// $regex
// $expr
// $jsonSchema
// $mod
// $text
// $where
// Examples:
// db.students.find({
//   name: { $regex: "^Noor" }
// })

// db.students.find({
//   age: { $mod: [5, 0] }
// })

// ### 5. Array Operators
// Used with arrays.
// $all
// $elemMatch
// $size

// db.students.find({
//   skills: { $all: ["React", "MongoDB"] }
// })

// db.students.find({
//   skills: { $size: 3 }
// })
// ## Easy Classification
// Query Operators
// │
// ├── Comparison
// │   ├── $eq
// │   ├── $ne
// │   ├── $gt
// │   ├── $gte
// │   ├── $lt
// │   ├── $lte
// │   ├── $in
// │   └── $nin
// │
// ├── Logical
// │   ├── $and
// │   ├── $or
// │   ├── $nor
// │   └── $not
// │
// ├── Element
// │   ├── $exists
// │   └── $type
// │
// ├── Evaluation
// │   ├── $regex
// │   ├── $expr
// │   ├── $mod
// │   └── $text
// │
// └── Array
//     ├── $all
//     ├── $elemMatch
//     └── $size

// Memory trick:
//>Comparison = compare, Logical = combine, Element = check field, Evaluation = advanced matching, Array = work with arrays.

// <================Lecture(14)Evaluation Operators======================>
// ## MongoDB Evaluation Operators — Short Notes
// Evaluation operators are used for advanced searching, calculations, patterns, and expressions.

// Assume:
// db.students.find()

// | Operator      | Purpose                             | Example                                  |
// | ------------- | ----------------------------------- | ---------------------------------------- |
// | `$regex`      | Pattern matching                    | `{ name: { $regex: "^Noor" } }`          |
// | `$expr`       | Compare/calculations between fields | `{ $expr: { $gt: ["$marks", "$age"] } }` |
// | `$mod`        | Find numbers divisible by a value   | `{ age: { $mod: [5, 0] } }`              |
// | `$text`       | Text search                         | `{ $text: { $search: "MongoDB" } }`      |
// | `$jsonSchema` | Validate document structure         | `{ $jsonSchema: {...} }`                 |
// | `$where`      | JavaScript-based condition          | `{ $where: "this.age > 25" }`            |

// ### 1. `$regex` — Pattern Search
// Find names starting with `Noor`:
// db.students.find({
//   name: { $regex: "^Noor" }
// })

// Common patterns:
// ^Noor    → starts with Noor
// Noor$    → ends with Noor
// Noor     → contains Noor

// ### 2. `$expr` — Compare Fields
// Suppose document has:
// {
//   age: 29,
//   marks: 80
// }
// Compare two fields:
// db.students.find({
//   $expr: {
//     $gt: ["$marks", "$age"]
//   }
// })

// Meaning:
// marks > age
// `$expr` is useful when you need to compare one field with another field.

// ### 3. `$mod` — Modulus
// Find students whose age is divisible by 5:
// db.students.find({
//   age: { $mod: [5, 0] }
// })
// Meaning:
// age % 5 = 0

// Example:
// 25 % 5 = 0 ✅
// 30 % 5 = 0 ✅
// 29 % 5 = 4 ❌

// ### 4. `$text` — Text Search
// First create a text index:
// db.students.createIndex({
//   name: "text",
//   course: "text"
// })

// Then search:
// db.students.find({
//   $text: {
//     $search: "MongoDB"
//   }
// })

// Used for text searching in indexed fields.

// ### 5. `$jsonSchema` — Schema Validation
// Example:
// db.students.find({
//   $jsonSchema: {
//     required: ["name", "age"]
//   }
// })
// Used to define/check the structure and data types of documents.

// ### 6. `$where` — JavaScript Condition
// db.students.find({
//   $where: "this.age > 25"
// })
// Meaning:
// Find students where age > 25
// ⚠️ `$where` is generally avoided when normal MongoDB operators can solve the query because it can be slower and has security/performance considerations.

// ## Easy Memory Trick
// $regex      → Pattern
// $expr       → Field comparison/calculation
// $mod        → Remainder
// $text       → Text search
// $jsonSchema  → Schema validation
// $where      → JavaScript condition

//<================Lecture(15)MongoDB FindOneAndUpdate FindOneAndReplace FindOneAndDelete ======================>
// ## MongoDB `findOneAnd...` Methods — Short Notes
// db.students
// ### 1. `findOneAndUpdate()`
// Finds one document and updates it.
// db.students.findOneAndUpdate(
//   { name: "Noor Alam" },
//   { $set: { age: 30 } }
// )
// 👉 Finds Noor and changes `age` to `30`.

// ### 2. `findOneAndReplace()`
// Finds one document and completely replaces it.
// db.students.findOneAndReplace(
//   { name: "Noor Alam" },
//   {
//     name: "Noor Alam",
//     age: 30,
//     course: "MERN",
//     email: "noor@gmail.com",
//     phone: "9876543210",
//     gender: "Male"
//   }
// )
// 👉 Old document is replaced with the new document.
// ⚠️ Fields not included in the replacement are removed.

// ### 3. `findOneAndDelete()`
// Finds one document and deletes it.
// db.students.findOneAndDelete({
//   name: "Noor Alam"
// })
// 👉 Finds the first matching document and deletes it.

// ### Quick Difference
// | Method                | Action                             |
// | --------------------- | ---------------------------------- |
// | `findOneAndUpdate()`  | Find + **Update fields**           |
// | `findOneAndReplace()` | Find + **Replace entire document** |
// | `findOneAndDelete()`  | Find + **Delete document**         |

// ### Easy Memory
// findOneAndUpdate  → ✏️ Change
// findOneAndReplace → 🔄 Replace
// findOneAndDelete  → 🗑️ Delete
// Interview: These methods are useful when you want to find one document and perform an operation on it in a single database command, often with options to return 
// the document before or after the operation.

// <================Lecture(16)Aggregation Pipeline Operator1======================>
// # MongoDB Aggregation — Short Notes
// Aggregation = process documents and get a calculated/transformed result.
// Think:
// Documents
//    ↓
// Aggregation Pipeline
//    ↓
// Filter → Group → Sort → Result

// Assume:
// db.students.aggregate([
//   ...
// ])

// ## Main Aggregation Stages

// | Stage                 | Purpose                      | Example                          |
// | --------------------- | ---------------------------- | -------------------------------- |
// | `$match`              | Filter documents             | `{ $match: { age: 29 } }`        |
// | `$group`              | Group documents              | `{ $group: { _id: "$course" } }` |
// | `$project`            | Select/transform fields      | `{ $project: { name: 1 } }`      |
// | `$set` / `$addFields` | Add/modify fields            | `{ $set: { passed: true } }`     |
// | `$unset`              | Remove fields                | `{ $unset: "email" }`            |
// | `$sort`               | Sort documents               | `{ $sort: { age: -1 } }`         |
// | `$limit`              | Limit results                | `{ $limit: 5 }`                  |
// | `$skip`               | Skip results                 | `{ $skip: 5 }`                   |
// | `$unwind`             | Split array elements         | `{ $unwind: "$skills" }`         |
// | `$lookup`             | Join collections             | `{ $lookup: {...} }`             |
// | `$count`              | Count documents              | `{ $count: "total" }`            |
// | `$sample`             | Random documents             | `{ $sample: { size: 3 } }`       |
// | `$replaceRoot`        | Replace document root        | `{ $replaceRoot: {...} }`        |
// | `$replaceWith`        | Replace document             | `{ $replaceWith: "$address" }`   |
// | `$facet`              | Multiple pipelines at once   | `{ $facet: {...} }`              |
// | `$bucket`             | Group into ranges            | `{ $bucket: {...} }`             |
// | `$bucketAuto`         | Automatically create ranges  | `{ $bucketAuto: {...} }`         |
// | `$out`                | Write result to collection   | `{ $out: "results" }`            |
// | `$merge`              | Merge result into collection | `{ $merge: "students" }`         |

// # 1. `$match`
// Filters documents.
// db.students.aggregate([
//   { $match: { age: { $gte: 25 } } }
// ])
// Meaning: Find students age 25 or above.
// > Similar to `find()`.

// # 2. `$group`
// Groups documents and performs calculations.
// db.students.aggregate([
//   {
//     $group: {
//       _id: "$course",
//       totalStudents: { $sum: 1 }
//     }
//   }
// ])
// Result:
// MERN  → 10
// Java  → 5
// ### Common `$group` operators
// $sum
// $avg
// $min
// $max
// $first
// $last
// $push
// $addToSet

// Example:
// {
//   $group: {
//     _id: "$course",
//     averageMarks: { $avg: "$marks" }
//   }
// }

// # 3. `$project`
// Choose or transform fields.
// db.students.aggregate([
//   {
//     $project: {
//       _id: 0,
//       name: 1,
//       course: 1
//     }
//   }
// ])
// Output:
// {
//   name: "Noor Alam",
//   course: "MERN"
// }

// # 4. `$set`
// Add or modify a field.
// db.students.aggregate([
//   {
//     $set: {
//       passed: { $gte: ["$marks", 40] }
//     }
//   }
// ])
// Adds:
// passed: true
// `$addFields` does essentially the same job.


// # 5. `$unset`
// Remove fields.
// db.students.aggregate([
//   {
//     $unset: ["email", "phone"]
//   }
// ])

// # 6. `$sort`
// Sort results.
// db.students.aggregate([
//   { $sort: { marks: -1 } }
// ])
// 1  → Ascending
// -1 → Descending

// # 7. `$limit`
// Return only a specific number.
// db.students.aggregate([
//   { $limit: 5 }
// ])
// Returns first 5 documents.

// # 8. `$skip`
// Skip documents.
// db.students.aggregate([
//   { $skip: 5 }
// ])
// Skips first 5.

// # 9. `$unwind`
// Breaks an array into separate documents.
// Suppose:
// {
//   name: "Noor",
//   skills: ["React", "Node", "MongoDB"]
// }
// db.students.aggregate([
//   { $unwind: "$skills" }
// ])
// Result:
// Noor → React
// Noor → Node
// Noor → MongoDB

// # 10. `$lookup`
// Performs a join between collections
// db.students.aggregate([
//   {
//     $lookup: {
//       from: "courses",
//       localField: "course",
//       foreignField: "name",
//       as: "courseDetails"
//     }
//   }
// ])
// Think:
// >MongoDB `$lookup` ≈ SQL JOIN**

// # 11. `$count`
// Counts documents.
// db.students.aggregate([
//   { $count: "totalStudents" }
// ])
// Result:
// {
//   totalStudents: 20
// }

// # 12. `$sample`
// Gets random documents.
// db.students.aggregate([
//   { $sample: { size: 3 } }
// ])
// Returns 3 random students.

// # 13. `$replaceRoot`
// Makes another object the entire document.
// db.students.aggregate([
//   {
//     $replaceRoot: {
//       newRoot: "$address"
//     }
//   }
// ])
// If document contains:
// address: {
//   city: "Bangalore",
//   state: "Karnataka"
// }

// Result becomes:
// {
//   city: "Bangalore",
//   state: "Karnataka"
// }

// # 14. `$replaceWith`
// Similar to `$replaceRoot`.
// db.students.aggregate([
//   {
//     $replaceWith: "$address"
//   }
// ])

// # 15. `$facet`
// Runs multiple aggregation pipelines at the same time.
// db.students.aggregate([
//   {
//     $facet: {
//       total: [
//         { $count: "count" }
//       ],
//       topStudents: [
//         { $sort: { marks: -1 } },
//         { $limit: 5 }
//       ]
//     }
//   }
// ])
// Useful for dashboards.

// # 16. `$bucket`
// Groups data into predefined ranges.
// db.students.aggregate([
//   {
//     $bucket: {
//       groupBy: "$age",
//       boundaries: [18, 25, 30, 40],
//       default: "Other",
//       output: {
//         count: { $sum: 1 }
//       }
//     }
//   }
// ])
// Think:
// 18–24
// 25–29
// 30–39
// # 17. `$bucketAuto`
// MongoDB automatically determines the ranges.
// db.students.aggregate([
//   {
//     $bucketAuto: {
//       groupBy: "$age",
//       buckets: 3
//     }
//   }
// ])
// Creates 3 approximately even buckets.

// # 18. `$out`
// Writes aggregation results into a new/existing collection.
// db.students.aggregate([
//   { $match: { course: "MERN" } },
//   { $out: "mernStudents" }
// ])
// Creates/overwrites:
// mernStudents

// # 19. `$merge`
// Writes aggregation results into an existing collection while allowing more controlled merging.
// db.students.aggregate([
//   { $match: { course: "MERN" } },
//   {
//     $merge: {
//       into: "mernStudents"
//     }
//   }
// ])
// ### `$out` vs `$merge`
// $out   → Replace collection with result
// $merge → Merge/update result into collection

// # Most Important Aggregation Operators
// Inside stages like `$group`, `$project`, and `$set`:
// ### Arithmetic
// $add
// $subtract
// $multiply
// $divide
// $mod

// ### Comparison
// $eq
// $ne
// $gt
// $gte
// $lt
// $lte
// ### Logical
// $and
// $or
// $not

// ### Conditional
// $cond
// $ifNull
// $switch

// ### Array
// $size
// $first
// $last
// $filter
// $map
// $concatArrays

// ### String
// $concat
// $toUpper
// $toLower
// $trim
// $substr

// # Real Example
// Find the average marks of each course, then show highest average first:
// db.students.aggregate([
//   {
//     $group: {
//       _id: "$course",
//       averageMarks: { $avg: "$marks" }
//     }
//   },
//   {
//     $sort: {
//       averageMarks: -1
//     }
//   }
// ])
// Pipeline:
// Students
//    ↓
// $group
//    ↓
// Calculate average
//    ↓
// $sort
//    ↓
// Highest average first
// //
// db.students.aggregate([
//   {
//     $match: {
//         age: { $gte: 25 }
//     }
//   },
//   {
//     $sort: {
//       averageMarks: -1
//     }
//   }
// ])
// ```

// db.students.aggregate([
//   {$match: {age: { $gte: 25 }}},
//   {$sort: {averageMarks: -1}},
//   {$project: {_id: 0, name: 1, averageMarks: 1}}
//   ])

//
// db.students.aggregate([
//   {$match: {age: { $lt: 20 }}},
//   {$count: "names"}
//   ])
//Result:
// { "names" : 2 }

//
// db.students.aggregate([
//   {$match: {age: { $gt: 20 }}},
//   {$sort: {age: -1}},
//   ])

//
// db.students.aggregate([
//   {$match: {age: { $gt: 20 }}},
//   {$sort: {age: 1, name:1}},
//   ])

//
// db.students.aggregate([
//   {$match: {age: { $gt: 20 }}},
//   {$sort: {age: 1, name:1}},
//   {$project: {_id: 0, name: 1, age: 1}}
//   ])

//
// db.students.aggregate([
//   {$match: {age: { $gt: 20 }}},
//   {$sort: {age: 1, name:1}},
//   {$project: {_id: 0, name: 1, age: 1, 
//   isValidAge: {$cond: [{$gte: ["$age", 25]}, true, false]}
//    }}
//   ])

//
// db.students.aggregate([
//   {$match: {age: { $gt: 20 }}},
//   {$sort: {age: 1, name:1}},
//   {$project: {_id: 0, name: 1, age: 1}}, 
//   {$limit:1}
//   ])

//
// db.students.aggregate([
//   {$match: {age: { $gt: 20 }}},
//   {$sort: {age: 1, name:1}},
//   {$project: {_id: 0, name: 1, age: 1}}, 
//   {$skip:10}
//   {$limit:10}
//   ])

//
// ## Interview Memory
// > `$match` → Filter
// > `$group` → Group + Calculate
// > `$project` → Select/Transform
// > `$set` → Add/Modify
// > `$unwind` → Break array
// > `$lookup` → Join
// > `$sort` → Sort
// > `$limit` → Limit
// > `$skip` → Skip
// > `$count` → Count
// > `$facet` → Multiple pipelines
// > `$out` → Write result
// > `$merge` → Merge res
// 

// <================Lecture(17)MongoDB Aggregation $group Operator ======================>
// MongoDB Aggregation `$group` Operator
// `$group` is used to **group documents based on a field and perform calculations** on each group.
// ### Basic Syntax
// db.students.aggregate([
//   {
//     $group: {
//       _id: "$course"
//     }
//   }
// ])
// If data is:
// { name: "Noor", course: "MERN", marks: 90 }
// { name: "Aman", course: "MERN", marks: 80 }
// { name: "Rahul", course: "Java", marks: 70 }
// Result:
// MERN
// Java

// ### `$sum` — Count documents
// db.students.aggregate([
//   {
//     $group: {
//       _id: "$course",
//       totalStudents: { $sum: 1 }
//     }
//   }
// ])
// Result:
// MERN → 2
// Java → 1

// ### `$sum` — Add values
// db.students.aggregate([
//   {
//     $group: {
//       _id: "$course",
//       totalMarks: { $sum: "$marks" }
//     }
//   }
// ])
// MERN → 170
// Java → 70

// ### `$avg` — Average
// db.students.aggregate([
//   {
//     $group: {
//       _id: "$course",
//       averageMarks: { $avg: "$marks" }
//     }
//   }
// ])
// MERN → 85
// Java → 70

// ### `$max` — Highest value
// db.students.aggregate([
//   {
//     $group: {
//       _id: "$course",
//       highestMarks: { $max: "$marks" }
//     }
//   }
// ])

// ### `$min` — Lowest value
// db.students.aggregate([
//   {
//     $group: {
//       _id: "$course",
//       lowestMarks: { $min: "$marks" }
//     }
//   }
// ])

// ### `$push` — Put values into an array
// db.students.aggregate([
//   {
//     $group: {
//       _id: "$course",
//       students: { $push: "$name" }
//     }
//   }
// ])
// Result:
// {
//   _id: "MERN",
//   students: ["Noor", "Aman"]
// }

// ### `$addToSet` — Unique values
// db.students.aggregate([
//   {
//     $group: {
//       _id: "$course",
//       skills: { $addToSet: "$skill" }
//     }
//   }
// ])

// Unlike `$push`, duplicate values are removed.
// ### Important `$group` Accumulators
// $sum        → Total / Count
// $avg        → Average
// $max        → Maximum
// $min        → Minimum
// $first       → First value
// $last        → Last value
// $push        → Create array (duplicates allowed)
// $addToSet   → Create unique array

// ### Easy Interview Definition
// > `$group` groups documents based on a common value and allows us to calculate things like count, sum, average, minimum, and maximum for each group.

// Memory:
// `$group` = GROUP BY in SQL.

//
// <================Lecture(18)MongoDB Aggregation $lookUp Operator ======================>
// ### `$lookup` in MongoDB
// The `$lookup` aggregation stage is used to join documents from two collections, similar to a SQL `JOIN`.
// ### Basic Syntax
// db.orders.aggregate([
//   {
//     $lookup: {
//       from: "customers",
//       localField: "customerId",
//       foreignField: "_id",
//       as: "customerDetails"
//     }
//   }
// ])

// ### Example
// Suppose we have an `orders` collection:
// {
//   _id: 101,
//   product: "Laptop",
//   customerId: 1
// }

// And a `customers` collection:
// {
//   _id: 1,
//   name: "Rahul",
//   city: "Bangalore"
// }

// Using `$lookup`:
// db.orders.aggregate([
//   {
//     $lookup: {
//       from: "customers",
//       localField: "customerId",
//       foreignField: "_id",
//       as: "customer"
//     }
//   }
// ])
// Result:
// {
//   _id: 101,
//   product: "Laptop",
//   customerId: 1,
//   customer: [
//     {
//       _id: 1,
//       name: "Rahul",
//       city: "Bangalore"
//     }
//   ]
// }

// ### Important fields

// | Field          | Meaning                                |
// | -------------- | -------------------------------------- |
// | `from`         | Collection to join                     |
// | `localField`   | Field in the current collection        |
// | `foreignField` | Matching field in the other collection |
// | `as`           | Name of the resulting array            |

// Key point: `$lookup` normally produces an array of matching documents, 
// even when there is only one match.

//
// `$unwind` is used to convert the array created by `$lookup` into a single object.
// # Example data
// `orders`
// {
//   _id: 101,
//   customerId: 1,
//   product: "Laptop"
// }
// `customers`
// {
//   _id: 1,
//   name: "Rahul",
//   email: "rahul@gmail.com"
// }

// # `$lookup` + `$unwind`
// db.orders.aggregate([
//   {
//     $lookup: {
//       from: "customers",
//       localField: "customerId",
//       foreignField: "_id",
//       as: "customerDetails"
//     }
//   },
//   {
//     $unwind: "$customerDetails"
//   }
// ])
// # What happens?
// After `$lookup`, the result looks like:
// {
//   _id: 101,
//   customerId: 1,
//   product: "Laptop",
//   customerDetails: [
//     {
//       _id: 1,
//       name: "Rahul",
//       email: "rahul@gmail.com"
//     }
//   ]
// }
// Notice that `customerDetails` is an array.
// After:
// {
//   $unwind: "$customerDetails"
// }
// it becomes:
// {
//   _id: 101,
//   customerId: 1,
//   product: "Laptop",
//   customerDetails: {
//     _id: 1,
//     name: "Rahul",
//     email: "rahul@gmail.com"
//   }
// }
// So, in simple words:
// `$lookup` → joins collections and gives an array
// `$unwind` → removes the array wrapper and gives the individual document
// # Full example with multiple orders
// db.orders.aggregate([
//   {
//     $lookup: {
//       from: "customers",
//       localField: "customerId",
//       foreignField: "_id",
//       as: "customerDetails"
//     }
//   },
//   {
//     $unwind: "$customerDetails"
//   },
//   {
//     $project: {
//       _id: 1,
//       product: 1,
//       customerName: "$customerDetails.name",
//       customerEmail: "$customerDetails.email"
//     }
//   }
// ])
// Output:
// {
//   _id: 101,
//   product: "Laptop",
//   customerName: "Rahul",
//   customerEmail: "rahul@gmail.com"
// }
// Easy way to remember: `$lookup` finds the related documents; 
// `$unwind` takes them out of the array.

//
// MongoDB `$lookup` + `$replaceRoot` example, followed by the `$replaceWith` equivalent.
// #Example data
// `orders`:
// {
//   _id: 1,
//   productId: 101,
//   quantity: 2
// }
// `products`:
// {
//   _id: 101,
//   name: "Laptop",
//   price: 800,
//   category: "Electronics"
// }

// #Using `$lookup` with `$replaceRoot`
// Suppose you want the lookup result to contain the product document itself:
// db.orders.aggregate([
//   {
//     $lookup: {
//       from: "products",
//       localField: "productId",
//       foreignField: "_id",
//       as: "product"
//     }
//   },
//   {
//     $unwind: "$product"
//   },
//   {
//     $replaceRoot: {
//       newRoot: "$product"
//     }
//   }
// ])

// Result:
// {
//   _id: 101,
//   name: "Laptop",
//   price: 800,
//   category: "Electronics"
// }

// #Replacing `$replaceRoot` with `$replaceWith`
// You can write the same thing more simply:
// db.orders.aggregate([
//   {
//     $lookup: {
//       from: "products",
//       localField: "productId",
//       foreignField: "_id",
//       as: "product"
//     }
//   },
//   {
//     $unwind: "$product"
//   },
//   {
//     $replaceWith: "$product"
//   }
// ])

// ### Important difference
// If you want to keep fields from the original order and combine them with the product
// {
//   $replaceWith: {
//     $mergeObjects: [
//       "$product",
//       "$$ROOT"
//     ]
//   }
// }
// For example, the result could be:
// {
//   _id: 1,
//   productId: 101,
//   quantity: 2,
//   name: "Laptop",
//   price: 800,
//   category: "Electronics"
// }
// In short:
// $replaceRoot → older/verbose syntax
// $replaceWith → simpler equivalent
// $mergeObjects → useful when you want to combine the lookup document with the original document

//
// <================Lecture(19)MongoDB Aggregation $bucket & $bucketAuto Operator ======================>
// #MongoDB Aggregation — `$bucket` and `$bucketAuto` Notes
// Both `$bucket` and `$bucketAuto` are aggregation stages used to group documents into ranges (buckets) based on a numeric or other comparable field.
// ## 1. `$bucket`
// `$bucket` groups documents into explicitly defined ranges.
// ### Syntax
// {
//   $bucket: {
//     groupBy: <expression>,
//     boundaries: [ <lower1>, <lower2>, ... ],
//     default: <value>,
//     output: {
//       <field1>: { <accumulator1>: <expression1> }
//     }
//   }
// }
// ### Example
// Suppose we have a `students` collection:
// {
//   name: "John",
//   age: 17
// }
// {
//   name: "Alice",
//   age: 22
// }
// {
//   name: "Bob",
//   age: 27
// }
// {
//   name: "David",
//   age: 35
// }
// {
//   name: "Sara",
//   age: 45
// }
// We can group students into age ranges:
// db.students.aggregate([
//   {
//     $bucket: {
//       groupBy: "$age",
//       boundaries: [0, 18, 30, 40, 50],
//       default: "Other",
//       output: {
//         count: { $sum: 1 },
//         students: { $push: "$name" }
//       }
//     }
//   }
// ])

// ### Result

// ```js
// {
//   _id: 0,
//   count: 1,
//   students: ["John"]
// }
// {
//   _id: 18,
//   count: 2,
//   students: ["Alice", "Bob"]
// }
// {
//   _id: 30,
//   count: 1,
//   students: ["David"]
// }
// {
//   _id: 40,
//   count: 1,
//   students: ["Sara"]
// }

// ### How boundaries work
// [0, 18)    → 0 ≤ age < 18
// [18, 30)   → 18 ≤ age < 30
// [30, 40)   → 30 ≤ age < 40
// [40, 50)   → 40 ≤ age < 50
// The lower boundary is inclusive, while the upper boundary is exclusive.
// `default` catches values that don't fall within the specified boundaries.
// # 2. `$bucketAuto`
// `$bucketAuto` automatically determines the bucket boundaries.
// You specify the number of buckets, rather than manually specifying boundaries.

// ### Syntax
// {
//   $bucketAuto: {
//     groupBy: <expression>,
//     buckets: <number>,
//     output: {
//       <field1>: { <accumulator1>: <expression1> }
//     }
//   }
// }

// ### Example
// db.students.aggregate([
//   {
//     $bucketAuto: {
//       groupBy: "$age",
//       buckets: 3,
//       output: {
//         count: { $sum: 1 },
//         students: { $push: "$name" }
//       }
//     }
//   }
// ])
// MongoDB automatically determines boundaries to create approximately equal-sized buckets.

// A possible result:
// {
//   _id: { min: 17, max: 22 },
//   count: 2,
//   students: ["John", "Alice"]
// }
// {
//   _id: { min: 22, max: 35 },
//   count: 2,
//   students: ["Bob", "David"]
// }
// {
//   _id: { min: 35, max: 45 },
//   count: 1,
//   students: ["Sara"]
// }

// The exact boundaries depend on the data.
// ## `$bucket` vs `$bucketAuto`
// | Feature           | `$bucket`                 | `$bucketAuto`                           |
// | ----------------- | ------------------------- | --------------------------------------- |
// | Boundaries        | Manually specified        | Automatically calculated                |
// | Number of buckets | Determined by boundaries  | Specified with `buckets`                |
// | Control           | High                      | Less control                            |
// | Useful for        | Known ranges              | Exploratory analysis                    |
// | Example           | Age 0–18, 18–30, 30–40    | Divide data into 3 groups               |
// | Bucket sizes      | Based on specified ranges | Approximately equal number of documents |

// ### Easy way to remember
// `$bucket` → "I decide the ranges."
// boundaries: [0, 18, 30, 40, 50]
// `$bucketAuto` → "MongoDB decides the ranges."
// buckets: 4

// #Common use cases
// Age groups: 0–18, 19–30, 31–50
// Price ranges: ₹0–₹1,000, ₹1,000–₹5,000
// Salary ranges
// Marks/score ranges
// Product price analysis
// Data distribution / exploratory analysis

//
//<================Lecture(20)MongoDB Aggregation $addFields & $unwind Operator ======================>
//## MongoDB Aggregation: `$addFields` & `$unwind` — Interview Notes
// ### 1. `$addFields`
// Purpose:
// `$addFields` adds new fields to documents or modifies existing fields while keeping all existing fields.
// Syntax:
// {
//   $addFields: {
//     newField: <expression>,
//     existingField: <expression>
//   }
// }
// ### Example
// Collection:
// {
//   name: "John",
//   salary: 50000,
//   bonus: 5000
// }
// Query:
// db.employees.aggregate([
//   {
//     $addFields: {
//       totalSalary: { $add: ["$salary", "$bonus"] }
//     }
//   }
// ])
// Output:
// {
//   name: "John",
//   salary: 50000,
//   bonus: 5000,
//   totalSalary: 55000
// }
// ### Important interview points
// * `$addFields` does not remove existing fields.
// * It can overwrite an existing field.
// * It accepts aggregation expressions such as `$add`, `$multiply`, `$concat`, `$cond`, etc.
// * `$set` is an alias for `$addFields` in modern MongoDB.

// Interview question: `$addFields` vs `$project`?
// > `$addFields` adds/modifies fields while retaining existing fields; `$project` is primarily used to control which fields appear in the output.
// # 2. `$unwind`
// Purpose:
// `$unwind` deconstructs an array field and creates one document for each array element.
// ### Example
// Document:
// {
//   name: "John",
//   skills: ["Java", "MongoDB", "Spring"]
// }
// Query:
// db.users.aggregate([
//   {
//     $unwind: "$skills"
//   }
// ])
// Output:
// { name: "John", skills: "Java" }
// { name: "John", skills: "MongoDB" }
// { name: "John", skills: "Spring" }
// ### Easy way to remember
// Array → `$unwind` → Multiple documents
// If one document contains:
// skills: [A, B, C]
// after `$unwind`:
// Document 1 → A
// Document 2 → B
// Document 3 → C
// ## `$unwind` with options
// {
//   $unwind: {
//     path: "$skills",
//     preserveNullAndEmptyArrays: true,
//     includeArrayIndex: "index"
//   }
// }
// ### `preserveNullAndEmptyArrays`
// By default, documents with a missing, `null`, or empty array field may be omitted.
// preserveNullAndEmptyArrays: true
// keeps those documents in the output.
// #`includeArrayIndex`
// Stores the array position:
// {
//   $unwind: {
//     path: "$skills",
//     includeArrayIndex: "skillIndex"
//   }
// }
// Output:
// {
//   name: "John",
//   skills: "Java",
//   skillIndex: 0
// }
// # 3. `$addFields` + `$unwind` together
// This combination is common in interviews.
// Example:
// {
//   name: "John",
//   orders: [
//     { product: "Laptop", price: 50000 },
//     { product: "Mouse", price: 1000 }
//   ]
// }
// Pipeline:
// db.users.aggregate([
//   {
//     $unwind: "$orders"
//   },
//   {
//     $addFields: {
//       orderPriceWithTax: {
//         $multiply: ["$orders.price", 1.18]
//       }
//     }
//   }
// ])
// Result:
// {
//   name: "John",
//   orders: { product: "Laptop", price: 50000 },
//   orderPriceWithTax: 59000
// }

// {
//   name: "John",
//   orders: { product: "Mouse", price: 1000 },
//   orderPriceWithTax: 1180
// }
// ### Why order matters
// If you need to calculate something for each array element, usually:
// $unwind
//    ↓
// $addFields
// Because `$unwind` first turns each array element into its own document.
// ## Quick interview revision
// | Operator     | Main purpose                                 |
// | ------------ | -------------------------------------------- |
// | `$addFields` | Add or modify fields                         |
// | `$set`       | Alias of `$addFields`                        |
// | `$unwind`    | Split array elements into separate documents |
// | `$project`   | Include/exclude/reshape fields               |
// | `$group`     | Group documents and calculate aggregates     |
// | `$match`     | Filter documents                             |
// ### One-line answers to memorize
// What does `$addFields` do?
// → Adds new fields or modifies existing fields without removing other fields.
// What does `$unwind` do?
// → Converts each element of an array into a separate document.
// What happens to other fields during `$unwind`?
// → They are carried into each generated document.
// What is `$set`?
// → `$set` is an alias for `$addFields`.
// When would you use `$unwind`?
// → When you need to process, filter, group, or analyze individual elements of an array.
// Common pattern:
// $match → $unwind → $addFields → $group → $project
// This is a good pattern to recognize in MongoDB aggregation interview questions.

//<================Lecture(21)MongoDB Aggregation $out $merge & $union Operator ======================>
// MongoDB Aggregation: $out, $merge & $unionWith
// These operators are used to save aggregation results or combine data from multiple collections.
// Operator     Purpose
// $out         Write aggregation result to a new/existing collection (replaces it).
// $merge       Insert, update, or merge aggregation result into a collection.
// $unionWith   Combine documents from another collection (similar to SQL UNION ALL).

// 1. $out Operator
// What is $out?
// $out takes the final output of an aggregation pipeline and writes it to a collection.
// Creates the collection if it doesn't exist.
// Replaces the entire collection if it already exists.
// Must be the last stage of the pipeline.
// Syntax
// {
//   $out: "collectionName"
// }
// Example
// orders Collection
// [
//   { "_id":1, "customer":"Noor", "amount":1000 },
//   { "_id":2, "customer":"Ali", "amount":2000 }
// ]
// Aggregation
// db.orders.aggregate([
//   {
//     $match: {
//       amount: { $gte: 1500 }
//     }
//   },
//   {
//     $out: "highValueOrders"
//   }
// ])
// New Collection: highValueOrders
// [
//   { "_id":2, "customer":"Ali", "amount":2000 }
// ]
// The result is stored permanently.
// Important Points
// Must be the last pipeline stage.
// Replaces existing collection completely.
// Good for reports, backups, and exporting processed data.
// 2. $merge Operator
// What is $merge?
// $merge writes aggregation results into a collection without replacing everything.
// It can:
// Insert new documents
// Update existing documents
// Keep existing documents unchanged
// Merge fields
// Think of it like an upsert.
// Syntax
// {
//   $merge: {
//     into: "collectionName",
//     on: "_id",
//     whenMatched: "merge",
//     whenNotMatched: "insert"
//   }
// }
// Example
// Existing salesSummary
// [
//   { "_id":1, "total":500 }
// ]
// sales
// [
//   { "_id":1, "amount":700 },
//   { "_id":2, "amount":900 }
// ]
// Aggregation
// db.sales.aggregate([
//   {
//     $project: {
//       total: "$amount"
//     }
//   },
//   {
//     $merge: {
//       into: "salesSummary",
//       on: "_id",
//       whenMatched: "merge",
//       whenNotMatched: "insert"
//     }
//   }
// ])
// Output
// [
//   { "_id":1, "total":700 },
//   { "_id":2, "total":900 }
// ]
// _id:1 was updated.
// _id:2 was inserted.
// whenMatched Options
// Option         Meaning
// "replace"      Replace existing document
// "merge"        Merge fields (most common)
// "keepExisting" Keep old document
// "fail"         Throw an error
// Pipelinecc     Custom update logic
// Example
// {
//   $merge: {
//     into: "summary",
//     whenMatched: "replace"
//   }
// }
// The old document is completely replaced.
// whenNotMatched Options
// Option      Meaning
// "insert"    Insert new document
// "discard"   Ignore it
// "fail"      Throw an error
// Example:
// whenNotMatched: "discard"
// New documents are skipped.
// $out vs $merge

// Feature                        $out                       $merge
// Existing collection            Replaces completely        Updates existing
// Insert new docs                Yes                        Yes
// Update existing docs           No                         Yes
// Upsert behavior                No                         Yes
// Last stage                     Yes                        Yes
// Use $out when generating a brand-new result collection, and $merge when maintaining or updating an existing collection.

// 3. $unionWith Operator
// What is $unionWith?
// $unionWith combines documents from another collection into the current aggregation result.
// It is similar to SQL's UNION ALL because duplicates are not removed automatically.
// Syntax
// {
//   $unionWith: {
//     coll: "collectionName"
//   }
// }
// Example
// students
// [
//   { "name":"Noor" },
//   { "name":"Ali" }
// ]
// teachers
// [
//   { "name":"Sara" },
//   { "name":"Ahmed" }
// ]
// Aggregation
// db.students.aggregate([
//   {
//     $unionWith: {
//       coll: "teachers"
//     }
//   }
// ])
// Output
// [
//   { "name":"Noor" },
//   { "name":"Ali" },
//   { "name":"Sara" },
//   { "name":"Ahmed" }
// ]
// Both collections appear in one result.
// $unionWith with a Pipeline
// You can filter the second collection.
// db.students.aggregate([
//   {
//     $unionWith: {
//       coll: "teachers",
//       pipeline: [
//         {
//           $match: {
//             department: "IT"
//           }
//         }
//       ]
//     }
//   }
// ])
// Only IT teachers are added.
// Remove Duplicates
// Since $unionWith behaves like UNION ALL, use $group afterward.
// db.students.aggregate([
//   {
//     $unionWith: {
//       coll: "teachers"
//     }
//   },
//   {
//     $group: {
//       _id: "$name"
//     }
//   }
// ])
// Duplicate names are removed.
// Real-World Example
// Suppose an e-commerce company has:
// onlineOrders
// storeOrders
// To generate one sales report:
// db.onlineOrders.aggregate([
//   {
//     $unionWith: {
//       coll: "storeOrders"
//     }
//   },
//   {
//     $group: {
//       _id: null,
//       totalSales: {
//         $sum: "$amount"
//       }
//     }
//   }
// ])
// This calculates total sales across both collections.

// $lookup vs $unionWith
// $lookup                     $unionWith
// Joins related documents     Appends documents
// Like SQL JOIN               Like SQL UNION ALL
// Returns nested array        Returns combined rows
// Matches using fields        No matching required
// Example:
// $lookup → Order + User
// $unionWith → Online Orders + Store Orders
// Quick Interview Comparison
// Operator       Main Use
// $out           Save results by replacing a collection
// $merge         Save results by updating or inserting
// $unionWith     Combine two collections into one result

// Interview One-Liners
// $out writes the aggregation result to a collection and replaces the existing collection.
// $merge performs upsert-like behavior by inserting or updating documents in a target collection.
// $unionWith combines documents from another collection, similar to SQL UNION ALL, and can also run a pipeline on the second collection before merging the results.

//<================Lecture(22)MongoDB Aggregation $facet Operator ======================>
// # MongoDB Aggregation: `$facet` Operator
// ## What is `$facet`?
// `$facet` allows you to run multiple aggregation pipelines on the same input documents at the same time.
// Think of it as:
// >One input → Multiple pipelines → One output document
// It is very useful for dashboards, reports, filters, pagination, and analytics.
// ### Syntax
// {
//   $facet: {
//     pipeline1: [
//       { /* stages */ }
//     ],
//     pipeline2: [
//       { /* stages */ }
//     ]
//   }
// }
// # Example
// Suppose we have an `orders` collection:
// [
//   { "_id": 1, "customer": "Noor", "category": "Electronics", "amount": 1000 },
//   { "_id": 2, "customer": "Ali", "category": "Clothing", "amount": 500 },
//   { "_id": 3, "customer": "Sara", "category": "Electronics", "amount": 2000 },
//   { "_id": 4, "customer": "Ahmed", "category": "Clothing", "amount": 800 }
// ]
// We want to get:
// 1. Total number of orders
// 2. Total sales
// 3. Orders grouped by category
// Without `$facet`, we would need separate aggregation queries.
// With `$facet`:
// db.orders.aggregate([
//   {
//     $facet: {
//       totalOrders: [
//         {
//           $count: "count"
//         }
//       ],
//       totalSales: [
//         {
//           $group: {
//             _id: null,
//             total: { $sum: "$amount" }
//           }
//         }
//       ],
//       categoryWise: [
//         {
//           $group: {
//             _id: "$category",
//             count: { $sum: 1 },
//             sales: { $sum: "$amount" }
//           }
//         }
//       ]
//     }
//   }
// ])
// ### Output
// [
//   {
//     "totalOrders": [
//       {
//         "count": 4
//       }
//     ],

//     "totalSales": [
//       {
//         "_id": null,
//         "total": 4300
//       }
//     ],

//     "categoryWise": [
//       {
//         "_id": "Electronics",
//         "count": 2,
//         "sales": 3000
//       },
//       {
//         "_id": "Clothing",
//         "count": 2,
//         "sales": 1300
//       }
//     ]
//   }
// ]
// Notice that all three pipelines received the same input documents.
// # `$facet` with `$match`
// Usually, you first filter the data and then create multiple reports.
// db.orders.aggregate([
//   {
//     $match: {
//       amount: { $gte: 500 }
//     }
//   },
//   {
//     $facet: {
//       totalOrders: [
//         { $count: "count" }
//       ],

//       averageAmount: [
//         {
//           $group: {
//             _id: null,
//             average: { $avg: "$amount" }
//           }
//         }
//       ],
//       categories: [
//         {
//           $group: {
//             _id: "$category",
//             count: { $sum: 1 }
//           }
//         }
//       ]
//     }
//   }
// ])
// The `$match` happens first, so all facet pipelines work only on the filtered documents.
// # Real-World Example: E-Commerce Filters
// Imagine an online shopping website.
// You want one API response containing:
// * Products
// * Total number of products
// * Price statistics
// * Products grouped by category
// db.products.aggregate([
//   {
//     $facet: {
//       products: [
//         { $skip: 0 },
//         { $limit: 10 }
//       ],

//       totalProducts: [
//         { $count: "count" }
//       ],
//       priceStats: [
//         {
//           $group: {
//             _id: null,
//             minPrice: { $min: "$price" },
//             maxPrice: { $max: "$price" },
//             avgPrice: { $avg: "$price" }
//           }
//         }
//       ],
//       categories: [
//         {
//           $group: {
//             _id: "$category",
//             count: { $sum: 1 }
//           }
//         }
//       ]
//     }
//   }
// ])
// This is extremely useful for creating a single API response for a dashboard or product page.
// # `$facet` and Pagination
// One of the most common practical uses is pagination.
// Instead of making two separate queries:
// Query 1 → Get products
// Query 2 → Get total count
// You can do both in one aggregation:
// db.products.aggregate([
//   {
//     $facet: {
//       data: [
//         { $skip: 20 },
//         { $limit: 10 }
//       ],

//       totalCount: [
//         { $count: "count" }
//       ]
//     }
//   }
// ])
// Output:
// [
//   {
//     "data": [
//       // 10 products
//     ],
//     "totalCount": [
//       {
//         "count": 100
//       }
//     ]
//   }
// ]
// This is a very common backend/API pattern.
// # Important Point
// The pipelines inside `$facet` are independent of each other.
// For example:
// {
//   $facet: {
//     pipelineA: [
//       { $match: { category: "Electronics" } }
//     ],

//     pipelineB: [
//       { $match: { category: "Clothing" } }
//     ]
//   }
// }
// Both start from the same input coming into `$facet`.
// # `$facet` vs `$group`
// | `$facet`                      | `$group`                          |
// | ----------------------------- | --------------------------------- |
// | Runs multiple pipelines       | Groups documents                  |
// | Produces multiple results     | Produces grouped results          |
// | Useful for dashboards/reports | Useful for aggregation by a field |
// | Multiple operations at once   | One grouping operation            |
// # `$facet` vs Multiple Queries
// ### Without `$facet`
// Database Query → Total Count
// Database Query → Products
// Database Query → Category Stats
// ### With `$facet`
//               ┌→ Total Count
// Input → $facet ├→ Products
//               └→ Category Stats
// So `$facet` can help you combine multiple related calculations into one aggregation request.
// # Interview One-Liner
// >`$facet` allows multiple aggregation pipelines to process the same input documents independently and returns all their results together in a single document.
// ### Easy way to remember
// `$facet` = Multiple pipelines from the same input.
//                 ┌── Pipeline 1
// Input → $facet ─┼── Pipeline 2
//                 └── Pipeline 3
// For interviews, remember this common use case:
// `$facet` → Pagination + Total Count + Filters/Statistics in one aggregation.

