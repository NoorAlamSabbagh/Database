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

