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