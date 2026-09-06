// (1) Relational Database:
// A relational database is a type of database that stores data in a structured format using tables, rows, and columns. 
// It uses SQL (Structured Query Language) for managing and manipulating the data. Relational databases are based on the relational model, 
// which defines relationships between different entities in the database.

//Data: collection of values or information that is stored in a database. 
//It can be structured (organized in tables) or unstructured (not organized in a predefined manner).

//Database: a structured collection of data that is stored and managed in a way that allows for efficient retrieval,
//manipulation, and storage of information.

//Database Management System (DBMS): a software application that allows users to create, manage, and interact with databases.

// Layman term of all 4 points:
// A library  is one of the easiest and most memorable layman examples.
// ### Library Example
// 1. Data  📖
// A  single book  in the library.
// Example:  "Java Programming" .
// 2. Database  🏛️
// The  entire library , which contains thousands of books organized together.
// 3. Relational Database  📚
// A  well-organized library  where books are arranged by categories (Science, History, Fiction), and related information is connected.
// Example:
//      Books  table
//      Authors  table
//      Members  table
//     One author can write many books, and one member can borrow many books.
// 4. Database Management System (DBMS)  👨‍💼
//   The  librarian  who manages the library.
//   The librarian helps you:
//     ➕ Add new books
//     ❌ Remove old books
//     🔍 Search for books
//     ✏️ Update book information
//     📋 Keep records of borrowed books

// ### Easy way to remember
// | Term                    | Layman Example                                                            |
// | ----------------------- | ------------------------------------------------------------------------- |
// |  Data                   | One book                                                                  |
// |  Database               | The whole library                                                         |
// |  Relational Database    | A library where books are organized and related (books, authors, members) |
// |  DBMS                   | The librarian who manages everything                                      |
// ### Another very common example: School
//    Data  → One student's details.
//    Database  → The school's complete student records.
//    Relational Database  → Student, Teacher, Class, and Subject tables connected by IDs.
//    DBMS  → The school management software that lets staff add, update, search, and delete records.
// For interviews, the  library example  is often the easiest for anyone to understand, while the  school example  is useful for 
// explaining relationships between tables.


//(5)Primary Key: A primary key is a unique identifier for each record in a database table. 
// It ensures that each record can be uniquely identified and accessed.
// example: In a "Students" table, the "StudentID" column can be the primary key, as each student has a unique ID.

//(6)Foreign Key: A foreign key is a field (or a set of fields) in one table that refers to the primary key in another table.
// It establishes a relationship between the two tables and ensures referential integrity.
// example: In a "Courses" table, the "InstructorID" column can be a foreign key that references the "InstructorID" primary key
// in the "Instructors" table.

// (5) Primary Key
// A Primary Key is a column that uniquely identifies each record in a table.
// Example – Students
// | StudentID | Name  | Course |
// | --------- | ----- | ------ |
// | 101       | Rahul | BCA    |
// | 102       | Amit  | BTech  |
// | 103       | Sara  | BCA    |

// Here, StudentID is the Primary Key because every student has a unique ID.
// Rules:
// Must be unique
// Cannot be NULL
// One primary key per table (it can contain multiple columns → composite key)

// (6) Foreign Key
// A Foreign Key is a column that connects one table to another by referring to the Primary Key of another table.
// Students
// | StudentID (PK) | Name  | CourseID (FK) |
// | -------------- | ----- | ------------- |
// | 101            | Rahul | C01           |
// | 102            | Amit  | C02           |
// | 103            | Sara  | C01           |
// Courses
// | CourseID (PK) | CourseName |
// | ------------- | ---------- |
// | C01           | BCA        |
// | C02           | BTech      |

// Here:
// `StudentID` → Primary Key
// `CourseID` in Courses → Primary Key
// `CourseID` in Students → Foreign Key
// So, `Students.CourseID` refers to `Courses.CourseID`.
// Simple way to remember:
// > Primary Key = Who am I?
// > Foreign Key = Which other table am I connected to?


// # Normalization
// Normalization means organizing data into separate tables to reduce duplicate data and avoid data problems.
// Think of it like:
// > ❌ Don't store the same information again and again.
// > ✅ Store it once and connect tables using keys.
// 1NF – First Normal Form
// Rule: Each cell should contain only one value. No multiple values in one cell.
// ❌ Bad:
// | StudentID | Name  | Phone      |
// | --------- | ----- | ---------- |
// | 101       | Rahul | 9876, 8765 |
// ✅ 1NF:
// | StudentID | Name  | Phone |
// | --------- | ----- | ----- |
// | 101       | Rahul | 9876  |
// | 101       | Rahul | 8765  |
// Remember:
// 1NF = Atomic / single value
// 2NF – Second Normal Form
// Rule: Must be in 1NF + every non-key column must depend on the whole Primary Key, not just part of it.
// Example:
// | StudentID | CourseID | StudentName | CourseName |
// | --------- | -------- | ----------- | ---------- |
// | 101       | C01      | Rahul       | BCA        |
// | 101       | C02      | Rahul       | BTech      |

// Primary Key = `(StudentID + CourseID)`
// Problem:
// `StudentName` depends only on `StudentID`
// `CourseName` depends only on `CourseID`
// So we separate them.
// Students
// | StudentID | StudentName |
// | --------- | ----------- |
// | 101       | Rahul       |

// Courses
// | CourseID | CourseName |
// | -------- | ---------- |
// | C01      | BCA        |
// | C02      | BTech      |

// Enrollment
// | StudentID | CourseID |
// | --------- | -------- |
// | 101       | C01      |
// | 101       | C02      |

// Remember:
// 2NF = No partial dependency**

// 3NF – Third Normal Form
// Rule: Must be in 2NF + non-key columns should not depend on another non-key column.
// ❌ Example:
// | StudentID | StudentName | DepartmentID | DepartmentName   |
// | --------- | ----------- | ------------ | ---------------- |
// | 101       | Rahul       | D01          | Computer Science |

// Here:
// `StudentID → DepartmentID → DepartmentName`
// `DepartmentName` depends on `DepartmentID`, not directly on `StudentID`.
// So separate:
// Students
// | StudentID | StudentName | DepartmentID |
// | --------- | ----------- | ------------ |
// | 101       | Rahul       | D01          |
// Departments
// | DepartmentID | DepartmentName   |
// | ------------ | ---------------- |
// | D01          | Computer Science |
// Remember:
// 3NF = No transitive dependency

// ### BCNF – Boyce-Codd Normal Form
// BCNF is a stronger version of 3NF.

// Simple rule:
// > Every column that determines another column must be a Candidate Key.

// For most basic interviews, remember:
// 3NF → remove transitive dependency
// BCNF → every determinant must be a candidate key

// 4NF – Fourth Normal Form
// Rule: Remove independent multi-valued relationships.
// Example:
// | Student | Skill  | Hobby   |
// | ------- | ------ | ------- |
// | Rahul   | Java   | Cricket |
// | Rahul   | Java   | Music   |
// | Rahul   | Python | Cricket |
// | Rahul   | Python | Music   |
// Skills and hobbies are independent of each other, causing unnecessary combinations.
// Separate:
// StudentSkills
// | Student | Skill  |
// | ------- | ------ |
// | Rahul   | Java   |
// | Rahul   | Python |

// StudentHobbies
// | Student | Hobby   |
// | ------- | ------- |
// | Rahul   | Cricket |
// | Rahul   | Music   |
// Remember:
// 4NF = Remove multi-valued dependency

// 5NF – Fifth Normal Form
// Rule: Break a table into smaller tables when it has complex relationships, so that data can be reconstructed without unnecessary redundancy.
// It mainly deals with join dependencies.
// Remember:
// 5NF = Remove join dependency / complex redundancy

// Quick Interview Revision
// | Form     | Easy Meaning                         |
// | -------- | ------------------------------------ |
// | 1NF      | One value per cell                   |
// | 2NF      | No partial dependency                |
// | 3NF      | No transitive dependency             |
// | BCNF     | Every determinant is a candidate key |
// | 4NF      | No multi-valued dependency           |
// | 5NF      | No unnecessary join dependency       |

// ### Easy Memory Trick
// 1 → Atomic
// 2 → Whole Key
// 3 → Nothing but Key
// 4 → Independent Multi-values
// 5 → Join Dependencies
// >Normalization = Reduce duplicate data + avoid insert/update/delete problems.

// ### ACID Principle
// ACID is a set of properties that makes database transactions reliable and safe.
// | Letter | Meaning     | Layman meaning                                |
// | ------ | ----------- | --------------------------------------------- |
// | A      | Atomicity   | Either everything happens, or nothing happens |
// | C      | Consistency | Database remains valid/correct                |
// | I      | Isolation   | Transactions don't interfere with each other  |
// | D      | Durability  | Once saved, data stays saved                  |

// Simple example: Bank transfer
// Suppose you transfer ₹1,000 from Rahul to Amit.
// 1. Atomicity → ₹1,000 must be deducted from Rahul and added to Amit. If one fails, both are rolled back.
// 2. Consistency → Database rules remain correct; money isn't created or lost.
// 3. Isolation → If another transaction is happening at the same time, it doesn't see an incomplete transfer.
// 4. Durability → After the transfer succeeds, the transaction remains saved even if the server crashes.

// Easy interview line:
// >ACID ensures database transactions are reliable, consistent, isolated, and permanent.

// Memory trick:
// A = All or Nothing
// C = Correct
// I = Independent
// D = Doesn't disappear
