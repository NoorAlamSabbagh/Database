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
// |  Data                 | One book                                                                  |
// |  Database             | The whole library                                                         |
// |  Relational Database  | A library where books are organized and related (books, authors, members) |
// |  DBMS                 | The librarian who manages everything                                      |
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

//(7)Data Normalization: Data normalization is the process of organizing data in a database to reduce redundancy 
// and improve data integrity.
// It involves breaking down large tables into smaller, related tables and defining relationships between them.
// The goal is to ensure that each piece of data is stored only once, minimizing duplication and potential inconsistencies.

//Normalization Forms:
// 1. First Normal Form (1NF): Ensures that each column contains atomic values and that each record is unique.
// eliminates repeating groups and arrays, ensuring that each field contains only one value.
// example: Instead of storing multiple phone numbers in a single column, create a separate table for phone numbers with a 
// foreign key reference to the main table.
// example in 1NF:
// Students Table:
// | StudentID | Name  | PhoneNumber |
// |-----------|-------|-------------|
// | 1         | Alice | 123-4567    |
// | 2         | Bob   | 987-6543    |

// 2. Second Normal Form (2NF): Ensures that all non-key attributes are fully functionally dependent on the primary key.
// eliminates partial dependencies, where a non-key attribute depends on only part of a composite primary key.
// example: If a table has a composite primary key (e.g., StudentID and CourseID), ensure that non-key attributes 
// (e.g., CourseName) depend on the entire primary key, not just one part of it.
//example in 2NF:
// Courses Table:
// | StudentID | CourseID | CourseName |
// |-----------|----------|------------|
// | 1         | 101      | Math       |
// | 2         | 102      | Science    |

// 3. Third Normal Form (3NF): Ensures that all non-key attributes are not only dependent on the primary key but also independent of each other.
// eliminates transitive dependencies, where a non-key attribute depends on another non-key attribute.
// example: If a table has a non-key attribute (e.g., InstructorName) that depends on another non-key attribute (e.g., InstructorID), 
// move the dependent attribute to a separate table and establish a foreign key relationship.
//example in 3NF:
// Instructors Table:
// | InstructorID | InstructorName |
// |--------------|----------------|
// | 1            | Dr. Smith      |
// | 2            | Prof. Johnson  |


