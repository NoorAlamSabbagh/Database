// //Lec(48)DynamoDB - DynamoDB Architecture
// SOA: Service-Oriented Architecture 
// SOA is a design pattern where services are provided to other components by application components, 
// through a communication protocol over a network.

// API: Application Programming Interface
// API is a set of rules and protocols that allow different software applications to communicate with each other.

// SSDs: Solid State Drives
// SSDs are storage devices that use integrated circuit assemblies to store data persistently, typically using flash memory.

// Consistent Hashing: A technique used in distributed systems to distribute data across multiple nodes in a way that minimizes the number of items that need to be moved when nodes are added or removed.
// Hash = F(Partion Key) % N

// //(49)DynamoDB Partitions in Depth
// 3000 RCUs means 3000 reads per second for items up to 4 KB in size.
// 1000 WCUs means 1000 writes per second for items up to 1 KB in size.
// upto 10GB SSD for each partition
// Formula for calculating the number of partitions:
// Number of partitions = max(1, (RCUs / 3000), (WCUs / 1000), (Data Size / 10GB))

// example in layman terms:
// If you have a table with 6000 RCUs, 2000 WCUs, and 25GB of data, the number of partitions would be:
// Number of partitions = max(1, (6000 / 3000), (2000 / 1000), (25GB / 10GB))
// = max(1, 2, 2, 2.5)
// = 3 partitions

//Lec(50)DynamoDB Efficient Key Design
// The partition key is used to determine the partition in which the item will be stored. 
// The sort key is used to order items within a partition.
// DynamoDB Keys:
// Simple Key: A primary key that consists of only a partition key. 
// Composite Key: A primary key that consists of both a partition key and a sort key.

// Efficient Key Design:
// 1. Choose a partition key that has a high cardinality (i.e., many unique values) to ensure even data distribution across partitions.
// 2. Avoid using sequential or monotonically increasing values as partition keys, as this can lead to hot partitions and uneven load distribution.
// 3. Use composite keys when you need to store multiple items with the same partition key but different sort keys, allowing for efficient querying and retrieval of related items.
// 4. Consider the access patterns of your application when designing keys to optimize for read and write performance.
// 5. Avoid using large attributes as part of the primary key, as this can increase the size of the index and impact performance.
// Consistent Hashing: A technique used in distributed systems to distribute data across multiple nodes in a way that minimizes the number of items that need to be moved when nodes are added or removed.

//Secondary Indexes:
// A secondary index is an index that allows you to query data in a DynamoDB table using an alternate key, in addition to the primary key. 
// There are two types of secondary indexes: Global Secondary Index (GSI) and Local Secondary Index (LSI).
// Global Secondary Index (GSI): A GSI is an index that has a partition key and an optional sort key that can be different from the primary key of the table.
// Local Secondary Index (LSI): An LSI is an index that has the same partition key as the primary key of the table, but a different sort key.
// When to use GSI vs LSI:
// Use GSI when you need to query data using an alternate partition key and sort key that are different from the primary key of the table.
// Use LSI when you need to query data using the same partition key as the primary key of the table, but a different sort key.
// Example of GSI vs LSI:
// Suppose you have a table of orders with a primary key of orderId (partition key) and customerId (sort key).
// If you want to query orders by customerId, you can create a GSI with customerId as the partition key and orderDate as the sort key.
// If you want to query orders by orderDate, you can create an LSI with orderId as the partition key and orderDate as the sort key.
// Example of GSI vs LSI:
// Suppose you have a table of orders with a primary key of orderId (partition key) and customerId (sort key).
// If you want to query orders by customerId, you can create a GSI with customerId as the partition key and orderDate as the sort key.
// If you want to query orders by orderDate, you can create an LSI with orderId as the partition key and orderDate as the sort key.
// Example of GSI vs LSI:
// Suppose you have a table of orders with a primary key of orderId (partition key) and customerId (sort key).
// If you want to query orders by customerId, you can create a GSI with customerId as the partition key and orderDate as the sort key.
// If you want to query orders by orderDate, you can create an LSI with orderId as the partition key and orderDate as the sort key.
// Example of GSI vs LSI:
// Suppose you have a table of orders with a primary key of orderId (partition key) and customerId (sort key).
// If you want to query orders by customerId, you can create a GSI with customerId as the partition key and orderDate as the sort key.
// If you want to query orders by orderDate, you can create an LSI with orderId as the partition key and orderDate as the sort key.
// Example of GSI vs LSI:

// Suppose you have a table of orders with a primary key of orderId (partition key) and customerId (sort key).
// If you want to query orders by customerId, you can create a GSI with customerId as the partition key and orderDate as the sort key.
// If you want to query orders by orderDate, you can create an LSI with orderId as the partition key and orderDate as the sort key.
// Example of GSI vs LSI:
// Suppose you have a table of orders with a primary key of orderId (partition key) and customerId (sort key).
// If you want to query orders by customerId, you can create a GSI with customerId as the partition key and orderDate as the sort key.
// If you want to query orders by orderDate, you can create an LSI with orderId as the partition key and orderDate as the sort key.
// Example of GSI vs LSI:
// Suppose you have a table of orders with a primary key of orderId (partition key) and customerId (sort key).
// If you want to query orders by customerId, you can create a GSI with customerId as the partition key and orderDate as the sort key.
// If you want to query orders by orderDate, you can create an LSI with orderId as the partition key and orderDate as the sort key.
// Example of GSI vs LSI:
// Suppose you have a table of orders with a primary key of orderId (partition key) and customerId (sort key).
// If you want to query orders by customerId, you can create a GSI with customerId as the partition key and orderDate as the sort key.
// If you want to query orders by orderDate, you can create an LSI with orderId as the partition key and orderDate as the sort key.
// Example of GSI vs LSI:
// Suppose you have a table of orders with a primary key of orderId (partition key) and customerId (sort key).
// If you want to query orders by customerId, you can create a GSI with customerId as the partition key and orderDate as the sort key.
// If you want to query orders by orderDate, you can create an LSI with orderId as the partition key and orderDate as the sort key.
// Example of GSI vs LSI:   
// Suppose you have a table of orders with a primary key of orderId (partition key) and customerId (sort key).
// If you want to query orders by customerId, you can create a GSI with customerId as the partition key and orderDate as the sort key.
// If you want to query orders by orderDate, you can create an LSI with orderId as the partition key and orderDate as the sort key.

//Efficient Key Design Summary:
// 1. Choose a partition key with high cardinality to ensure even data distribution across partitions.
// 2. Avoid using sequential or monotonically increasing values as partition keys to prevent hot partitions.

//Lec(51)Hot Keys or Hot Partitions
// (1)Time Series Data (2)Popular Datasets
// Lec(52)DynamoDB design Patter
// ## 1. One-to-One
// One record is related to exactly one record.
// Example: User → User Profile
// User
//   │
//   └── UserProfile
// Example data:
// User
// PK: USER#101
// Name: Noor
// Profile
// PK: USER#101
// Age: 29
// City: Bengaluru
// In DynamoDB, you can also store both related entities in the same item when they are always accessed together.
// Interview answer:
// > “In a one-to-one relationship, one entity corresponds to one other entity. In DynamoDB, 
// I can use the same partition key or combine the related data into one item depending on the access pattern.
// # 2. One-to-Many
// One parent has multiple children.
// Example: Customer → Orders
// Customer
//    │
//    ├── Order 1
//    ├── Order 2
//    └── Order 3
// A common DynamoDB pattern is composite keys:
// PK              SK
// -----------------------------
// CUSTOMER#101    CUSTOMER
// CUSTOMER#101    ORDER#001
// CUSTOMER#101    ORDER#002
// CUSTOMER#101    ORDER#003
// Now:
// PK = CUSTOMER#101
// can retrieve all orders belonging to that customer.
// ### Why is this useful?
// Because DynamoDB is designed around access patterns.
// Instead of:
// Find customer
//      ↓
// Find orders separately
// we can retrieve related items efficiently using the same partition key.
// Interview answer:
// > “For one-to-many relationships, I commonly use a shared partition key and different sort keys. For example, all orders of a customer can use CUSTOMER#101 as the partition key and ORDER#ID as the sort key.”
// # 3. Many-to-Many
// Many records can relate to many other records.
// Example: Students ↔ Courses
// Student A ── Course 1
//           ├─ Course 2
// Student B ── Course 1
//           └─ Course 3
// A common approach is to create relationship items.
// PK              SK
// ------------------------------
// STUDENT#101     COURSE#1
// STUDENT#101     COURSE#2
// STUDENT#102     COURSE#1
// STUDENT#102     COURSE#3
// Now:
// PK = STUDENT#101
// gets all courses for Student 101.
// If you also need:
// > “Find all students enrolled in Course 1”
// you can use another access pattern, often with a GSI:
// GSI-PK         GSI-SK
// ------------------------------
// COURSE#1       STUDENT#101
// COURSE#1       STUDENT#102
// Interview answer:
// > “For many-to-many relationships, I usually model the relationship explicitly using mapping items and use a GSI when I need to query the relationship from the opposite direction.”
// # 4. Hierarchical Data Structures
// This means data has a parent-child hierarchy.
// Examples:
// Company
//  ├── Engineering
//  │    ├── Backend
//  │    └── Frontend
//  │
//  └── HR
// Another example:
// Category
//  └── Electronics
//       └── Mobile
//            └── Android
// DynamoDB can represent this using a path or parent ID.
// Example:
// PK              SK
// --------------------------------
// CATEGORY#1      CATEGORY
// CATEGORY#1      CATEGORY#2
// CATEGORY#2      CATEGORY#3
// CATEGORY#3      CATEGORY#4
// Or using a path:
// CATEGORY#1
// CATEGORY#1/CATEGORY#2
// CATEGORY#1/CATEGORY#2/CATEGORY#3
// The exact design depends on what you need to query.
// ### Interview answer:
// > “For hierarchical data, I can model parent-child relationships using partition keys, sort keys, or hierarchical paths. The design depends on whether I need to retrieve children, ancestors, or the complete hierarchy efficiently.”
// # ⭐ The most important DynamoDB concept
// For DynamoDB interviews, don't start with:
// > “How do I convert my SQL tables into DynamoDB?”
// Start with:
// >“What are my access patterns?”
// For example:
// Requirement:
// Get all orders for a customer
//         ↓
// Access Pattern:
// customer → orders
//         ↓
// DynamoDB Design:
// PK              SK
// -------------------------
// CUSTOMER#101    CUSTOMER
// CUSTOMER#101    ORDER#1
// CUSTOMER#101    ORDER#2
// CUSTOMER#101    ORDER#3
// This is called access-pattern-driven design.
// ### Easy way to remember all four
// 1-to-1
// User → Profile
// 1-to-Many
// Customer → Orders
// Many-to-Many
// Students ↔ Courses
// Hierarchy
// Company
//   ↓
// Department
//   ↓
// Team
//   ↓
// Employee
// For your TCS interview, the most important DynamoDB topics after these patterns are: partition key vs sort key, GSI vs LSI, hot partition, Query vs Scan, single-table design, access patterns, consistency, and DynamoDB transactions.

// //Lec(53)Multi-Value Sort Filters
// In DynamoDB, a Sort Key can be used to store multiple values in a structured way, and then we can use conditions on the sort key to retrieve only the items we need.
// ### Simple example
// Suppose we have orders:
// PK              SK
// --------------------------------
// USER#101        ORDER#2026-09-01
// USER#101        ORDER#2026-09-10
// USER#101        ORDER#2026-09-20
// USER#101        ORDER#2026-10-01
// If we want:
// > Get orders for USER#101 between September 1 and September 30.
// We can use:
// PK = USER#101
// AND
// SK BETWEEN ORDER#2026-09-01 AND ORDER#2026-09-30
// Because DynamoDB's `Query` operation supports conditions on the sort key.
// ### What does "multi-value" mean?
// You can structure the sort key with multiple pieces of information.
// For example:
// SK = ORDER#PAID#2026-09-20#ORDER123
// Here the sort key contains:
// ORDER
//    ↓
// PAID
//    ↓
// DATE
//    ↓
// ORDER ID
// This is useful for creating predictable sorting and filtering patterns.
// ## Common sort-key conditions
// ### 1. `=`
// SK = ORDER#100
// Exact match.
// ### 2. `BEGINS_WITH`
// begins_with(SK, 'ORDER#')
// Gets all items whose sort key starts with `ORDER#`.
// ### 3. `BETWEEN`
// SK BETWEEN 'ORDER#2026-09-01'
//          AND 'ORDER#2026-09-30'
// Useful for date ranges.
// ### 4. `<` / `>`
// For example:
// SK > 'ORDER#2026-09-01'
// Gets items after a particular sort-key value.
// ## Important interview point
// DynamoDB `Query` works like:
// Partition Key
//       +
// Sort Key condition
// Example:
// PK = CUSTOMER#101
//         +
// SK BETWEEN DATE1 AND DATE2
// But you cannot arbitrarily filter the partition key using multiple values in one Query.
// For example:
// PK IN (CUSTOMER#101, CUSTOMER#102)
// is not how a DynamoDB `Query` works. You would generally need separate queries or a different data model/access pattern.

// ## Query vs FilterExpression
// This is very important for interviews.
// ### KeyConditionExpression
// Filters using the partition key and sort key and determines which items DynamoDB reads.
// PK = USER#101
// AND SK BETWEEN DATE1 AND DATE2
// ### FilterExpression
// Filters the items after DynamoDB has read them.
// Example:
// status = 'PAID'
// So:
// Query
//  ↓
// Read matching items
//  ↓
// FilterExpression
//  ↓
// Return remaining items
// Therefore, FilterExpression does not reduce the underlying read capacity consumed by the items that were read.
// ### Interview answer
// > “In DynamoDB, I prefer putting conditions into the key condition whenever possible because Query uses the partition key and sort key efficiently. FilterExpression is applied after the items are read, so it doesn't reduce the read capacity consumed by those items.”

// ### 🧠 Easy memory trick
// Partition Key
//       ↓
// Which partition?

// Sort Key
//       ↓
// Which items within it?

// FilterExpression
//       ↓
// Which of the already-read items should I return?
// For your TCS interview, remember this one line:
// >Query narrows what DynamoDB reads; FilterExpression narrows what DynamoDB returns.

//Lec(54)DynamoDB Limits
// Capacity and throughput Limits
// 4KB per RCU
// 1KB per WCU 
// 10GB per partition 
// 3000 RCUs or 1000 WCUs per partition 
// Minimum 1RCU and 1 WCU per table or index

// Index and Attribute Limits
// . 5 local secondary indexes per table
// . 5 global secondary indexes per table
// . Max 20 user-specified projected attributes across all secondary
//   indexes of the table
// . Max size of partition key = 2 KB
// . Max size of sort key = 1 KB
// . Max size of all items per partition key = 10 GB (Including all LSIs)
// . Max size of a table item = 400 KB
// . For nested attributes, max possible nesting is 32 levels deep

//
// API Limits
// . Max 10 simultaneous requests for table-level operations
//   (CreateTable, UpdateTable, and DeleteTable)
// · Max 100 items (up to 16 MB in size) returned per
// BatchGetltem request
// . Max 25 Putltem or Deleteltem requests (up to 16 MB in
//   size) per BatchWriteltem request
// . Max 1 MB data returned per query or scan request


//Lec(55)Error Handling in DynamoDB
// Exceptions in DynamoDB
// (1)Access Denied Exception
// (2)Conditional Check Failed Exception
// (3)Item Collection, Size Limit, Exceeded, Exception
// (4)Limit Exceeded Exception
// (5)Resource In Use Exception
// (6)Validation Exception
// (7)Provisioned Throughput Exceeded Exception

//Lec(56)DynamoDB Practices
// Uniform Data Access
// Provisioned Capacity:
// R = 50 RCUs
// W = 50 WCUs

// Number of Partitions:
// N= 5

// Capacity per Partition
// R/N = 50 / 5 = 10 RCUs

//
// Split Large Attributes Across Items

// Partition Key --> article_id      content

//                    A1             Video provides a powerful way to help you prove your point.
//                                   When you click Online Video, you can paste in the embed
//                                   code for the video you want to add. You can also type a ...

// Articles Table

//                     A2            To make your document look professionally produced, Word
//                                   provides header, footer, cover page, and text box designs
//                                   that complement each other. For example, you can add ...

//                     A3

//Lec(57)DynamoDB Best Practice(2)
// Best Practice for Read Operations 
// (1)Avoid Scans 
// (2)Avoid Filters
// (3)Use Eventual Consistency

// Best practice for LSIs:
// (1)Use LSIs Sparingly 
// (2)Project Fewer Attributes
// (3)Use Sparse Indexes
// (4)Watch for Expanding Item Collections

//Best Practice for GSIs
// (1)Design for Uniform Worklaods
// (2)Use Spare Indexes
// (3)Project Fewer Attributes
// (4)Eventully Consistent Read Replicas

//Lec(58)Way To Lower DynamoDB Costs
// Optimizing DynamoDB Costs
// (1)Use Sparse Indexes
// (2)Project Fewer Attributes
// (3)Design for Uniform Workloads
// (4)Use Compression
// (5)Avoid Scans and Filters
// (6)Archive Old Data
// (7)Use Eventual Consistency
// (8)Choose Low-Cost Region
// (9)Use Auto-Scaling
// (10)Leverage Reserved Capcity




