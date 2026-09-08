Terminology Comparison with SQL Databases(SQL/RDBMS VS DynamoDB): 
Here is the simple comparison:
| SQL / RDBMS     | DynamoDB                        |                          |
| --------------- | ------------------------------- | ------------------------ |
| Database    | **Database**                    |                          |
| Table       | **Table**                       |                          |
| Row         | **Item**                        |                          |
| Column      | **Attribute**                   |                          |
| Primary Key | **Partition Key / Primary Key** |                          |
| Foreign Key | No traditional foreign key      |                          |
| JOIN*       | No traditional JOIN             |                          |
| Schema      | Usually fixed/structured        | Flexible                 |
| Query       | SQL                             | DynamoDB API/expressions |

### Example
SQL:
Database: College
Table: Students

ID | Name  | Age
1  | Rahul | 25
2  | Amit  | 24

DynamoDB:
Table: Students
{
  "id": 1,
  "name": "Rahul",
  "age": 25
}
So remember:
>SQL → Table → Row → Column
>DynamoDB → Table → Item → Attribute
The easiest way to remember Item = Row and Attribute = Column.


(2)Primary Key — Short version
Primary Key = unique identity of each record.
Example:
Students
ID    Name
101   Rahul
102   Amit
103   John
Here ID is the Primary Key because every student has a different ID.

#Rules
* ✅ Must be unique
* ❌ Cannot be **NULL**
* Usually one primary key per table

**Easy to remember:
> Primary Key answers: **"Which exact record is this?"


(3)DynamoDB Table Naming Conventions
DynamoDB table names should be clear, consistent, and meaningful.
Common convention:
<service>-<environment>-<entity>

Examples:
user-service-prod-users
user-service-dev-users
order-service-prod-orders
payment-service-prod-transactions
### Simple project example
For an e-commerce application:
| Table      | Purpose        |
| ---------- | -------------- |
| `Users`    | Store users    |
| `Products` | Store products |
| `Orders`   | Store orders   |
| `Payments` | Store payments |

For multiple environments:
myapp-dev-users
myapp-staging-users
myapp-prod-users

### Best practices
* Use **descriptive names**
* Keep naming **consistent**
* Include **environment** (`dev`, `staging`, `prod`) when needed
* Avoid spaces and confusing abbreviations
* Don't create unnecessary tables just because you have different entities

**Easy memory:**
> DynamoDB table name should tell you which application + environment + data** it contains.

(4)Data Types in DynamoDB
DynamoDB supports various data types for attributes. Here are the main ones:
| Data Type | Description |
| --------- | ----------- |
| String    | A UTF-8 encoded string. |
| Number    | Numeric values (integers, floats). |
| Binary    | Binary data (e.g., images, files). |
| Boolean   | True or False values. |


(5)DynamoDB Consistency Models
DynamoDB provides two consistency models for reading data:
| Consistency Model | Description |
| ----------------- | ----------- |
| Eventually Consistent Reads | The data may not reflect the most recent write. It is the default and provides better performance. |
| Strongly Consistent Reads | The data reflects all writes that received a successful response prior to the read. It may have higher latency and lower throughput. |

(6)DynamoDB Capacity Units:
DynamoDB uses capacity units to measure the amount of read and write operations performed on a table. Each read or write operation
consumes a certain number of capacity units based on the size of the data being accessed.
RCU Vs WCU:
| Capacity Unit | Description |
| ------------- | ----------- |
| Read Capacity Unit (RCU) | Represents one strongly consistent read per second, or two eventually consistent reads per second, for items up to 4 KB in size. |
| Write Capacity Unit (WCU) | Represents one write per second for items up to 1 KB in size. |

(7)Basics of DynamoDB Partitioning:
DynamoDB uses partitioning to distribute data across multiple servers for scalability and performance. 
Each item in a DynamoDB table is stored in a partition based on its partition key. 
The partition key determines the physical location of the item in the database.
Its Maths:
(*) Partition Key = Hash Function (Partition Key Value) % Number of Partitions

(8)DynamoDB Indexes:
DynamoDB supports two types of indexes to improve query performance:
| Index Type | Description |
| ---------- | ----------- |
| Global Secondary Index (GSI) | An index with a partition key and an optional sort key that can be different from the base table's primary key. It allows for querying on non-primary key attributes. |
| Local Secondary Index (LSI) | An index that has the same partition key as the base table but a different sort key. It allows for querying on non-primary key attributes while maintaining the same partition key. |

(9)Interacting with DynamoDB:
You can interact with DynamoDB using the AWS Management Console, AWS CLI, or AWS SDKs. 
The AWS SDKs provide programming language-specific libraries to interact with DynamoDB programmatically.