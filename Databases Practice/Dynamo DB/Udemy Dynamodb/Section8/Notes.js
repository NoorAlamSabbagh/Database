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

