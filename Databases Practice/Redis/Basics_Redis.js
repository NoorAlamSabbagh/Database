//<===================(1)Story of Redis=====================>
// Redis is an open-source, in-memory data structure store that can be used as a database, cache, and message broker.
//  It was created by Salvatore Sanfilippo in 2009 and has since become one of the most popular NoSQL databases in the world. 
// Redis is known for its high performance, flexibility, and support for various data structures such as strings, hashes, lists, sets,
//  and sorted sets.
// Redis State => RAM => FAST 
// Redis in-memory data store => NoSQL database => Key-Value store => Data structures => Strings, Hashes, Lists, Sets, Sorted Sets => High Performance => Scalability => Persistence Options (RDB, AOF) => Pub/Sub Messaging => Transactions => Lua Scripting => Clustering and Replication => Use Cases (Caching, Session Management, Real-time Analytics, Leaderboards, Queues)

//Cons of Redis:
// 1. Cost: Redis is not free for commercial use.
// 2. Memory Usage: Redis stores all data in memory, which can be expensive for large datasets.
// 3. Data Persistence: Redis is primarily an in-memory database, which means that data can be lost 
// if the server crashes or is restarted.
//(4)Read pressure: Redis is optimized for read-heavy workloads, which can lead to performance issues for 
// write-heavy workloads.
// 5. Limited Querying: Redis does not support complex querying like traditional relational databases, 
// which can limit its use cases.

// Redis vs Memcached
// Redis is the more capable choice for most apps. Both Redis and Memcached are in-memory stores, but Redis goes beyond simple string caching with rich data structures, built-in persistence, and clustering:
// Rich data structures beyond simple strings (Lists, Sets, Hashes, Sorted Sets, Streams, JSON)
// Built-in persistence so data survives restarts
// Pub/Sub messaging for real-time communication
// Lua scripting for server-side logic
// Cluster mode for horizontal scaling with automatic sharding

// Interview answer
// Redis Cluster (Sharding): Redis scales by dividing data across multiple Redis nodes. Each node stores only part of the data, allowing the system to handle larger datasets and more traffic.
// MongoDB Replica Sets + Sharding: MongoDB scales by sharding (splitting data across servers) and provides high availability using replica sets, where each shard has backup copies that can take over if the primary server fails.
// Memory trick
// Redis Cluster = Split the data 🧩
// Replica Set = Copy the data 📄
// MongoDB = Split the data 🧩 + Copy the data 📄

//
// How much data can Redis store?
// Redis can store up to 2^32 keys (over 4 billion), and each String value can hold up to 512 MB. The practical limit depends on available memory.
// Redis Cloud and Redis Cluster let you scale beyond a single node's memory by sharding data across multiple instances.

//
// >Redis supports some ACID features, but not all of them like MySQL or PostgreSQL.**
// First, let's understand ACID.
// | Letter | Meaning     | Simple Meaning                                |
// | ------ | ----------- | --------------------------------------------- |
// | **A**  | Atomicity   | Either everything happens or nothing happens. |
// | **C**  | Consistency | Data always stays valid.                      |
// | **I**  | Isolation   | Transactions don't interfere with each other. |
// | **D**  | Durability  | Once committed, data survives crashes.        |
  
// ## Does Redis support ACID?
// ## ✅ Atomicity (Partially)
// Redis supports atomic operations.

// Example:
// INCR counter

// Suppose:
// counter = 5

// Two users execute:
// INCR counter

// Redis executes one first:
// 5 → 6

// Then the second:
// 6 → 7
// The value never becomes incorrect because each command is atomic.

// ### MULTI/EXEC Example
// MULTI
// SET name Noor
// SET age 29
// EXEC
// Redis executes both commands together without another client's command running in between.

// ## What Redis cannot do (Rollback)
// Imagine a bank transfer.
// Account A = ₹1000
// Account B = ₹500
// Transaction:
// MULTI
// DECRBY A 500
// INCRBY B 500
// EXEC

// Now imagine:
// * `DECRBY A 500` succeeds.
// * `INCRBY B 500` has an error (for example, a command error due to incorrect usage).

// In a relational database like MySQL:
// Rollback
// Everything is undone.
// Account A = ₹1000
// Account B = ₹500
// Nothing changes.

// ### Redis
// Redis does not provide automatic rollback like MySQL.
// It doesn't go back and undo commands that have already executed.
// That's why people say:
// >Redis is not fully ACID-compliant.**
// ## Why is MySQL different?

// MySQL has:
// BEGIN;
// UPDATE accountA ...
// UPDATE accountB ...
// COMMIT;

// If something goes wrong:
// ROLLBACK;
// Everything is restored.
// Redis has no equivalent automatic rollback mechanism.
// ## What about Lua Scripts?

// Redis supports Lua scripts
// Instead of sending:
// Command 1
// Command 2
// Command 3
// you send one Lua script.
// Redis executes the entire script as a single atomic operation.
// This is useful when multiple Redis commands need to behave like one unit.
// ## Easy analogy
// ## MySQL
// Imagine writing with a pencil.
// If you make a mistake:
// ✏️ Erase it.
// Everything goes back to the previous state.
// #Redis
// Imagine writing with a permanent marker.
// Once a command has been executed, Redis doesn't automatically erase it if a later command fails.
// # Interview answer
// > Redis is not fully ACID-compliant like relational databases. It provides atomic execution for individual commands and `MULTI`/`EXEC` transaction blocks, but it does not support automatic rollback across multiple commands. For many applications,
//   Redis's atomic operations and Lua scripting provide enough consistency while keeping performance very high.
