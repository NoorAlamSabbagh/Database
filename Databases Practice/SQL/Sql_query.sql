create database college;
-- CREATE DATABASE IF NOT EXISTS college;
-- DROP DATABASE IF EXISTS company;

USE college;

-- CREATE TABLE student(
-- id INT PRIMARY KEY,
-- name VARCHAR(50),
-- age INT NOT NULL
-- );

-- INSERT INTO student VALUES(1, "AMAN", 26);
-- INSERT INTO student VALUES(2, "SHARDHA", 26);

-- SELECT * FROM student;

-- Show databases;
-- Show Tables;
-- DROP TABLES student

-- CREATE TABLE student(
-- rollno INT PRIMARY KEY,
-- name VARCHAR(50)
-- )

----  SELECT * FROM student;

-- INSERT INTO student
-- -- (rollno, name)
-- -- VALUES
-- -- (101, "Karan"),
-- -- (102, "arjun"),
-- -- (103, "ram");

-- INSERT INTO student
-- (rollno, name)
-- VALUES
-- (104, "Shayam");

-- INSERT INTO student VALUES (105, "ALAM");-- 
-- SELECT * FROM student;

-- Question1-- 
CREATE DATABASE XYZ_company;
USE XYZ_company;

CREATE TABLE employee(
id INT PRIMARY KEY,
name VARCHAR(100),
salary INT
);

INSERT INTO employee
(id, name, salary)
VALUES
(1, "adam", 25000),
(2, "bob", 30000),
(3, "casey", 40000);

SELECT * FROM employee;

CREATE TABLE temp1 (
id INT UNIQUE
);

INSERT INTO temp1 VALUES (101);
INSERT INTO temp2 VALUES (101);
SELECT * FROM temp1;
DROP TABLE temp1;

CREATE TABLE temp1 (
id INT,
name VARCHAR(50),
age INT,
city VARCHAR(20),
PRIMARY KEY (id, name)
);

CREATE TABLE emp (
id INT,
salary INT DEFAULT 25000);
INSERT INTO emp (id) VALUES (101);
SELECT * FROM emp;

CREATE DATABASE college2;
USE college2;

CREATE TABLE student (
rollno INT PRIMARY KEY,
name VARCHAR(50),
marks INT NOT NULL,
grade VARCHAR(1),
city VARCHAR(20)
);


INSERT INTO student
(rollno, name, marks, grade, city)
VALUES
(101, "anil", 78, "C", "Pune"),
(102, "bhumika", 98, "A", "Agra"),
(103, "chetan", 99, "A", "Mumbai"),
(104, "dhruve", 99, "A", "Lucknow"),
(105, "alam", 88, "B", "Delhi");

SELECT * FROM student;
SELECT name, marks FROM student;
SELECT DISTINCT city FROM student;
SELECT DISTINCT marks FROM student;

SELECT *
FROM student
WHERE marks > 80;

SELECT *
FROM student
WHERE city = "Mumbai";

SELECT *
FROM student
WHERE marks > 80 && city = "Mumbai";

SELECT *
FROM student
WHERE marks > 80 OR city = "Mumbai";

SELECT *
FROM student
WHERE marks > 80 && city = "Mumbai";


SELECT *
FROM student
WHERE marks BETWEEN 80 AND 90;

SELECT *
FROM student
WHERE city IN ("DELHI", "MUMBAI", "Gurgaon");

SELECT *
FROM student
LIMIT 3;

SELECT *
FROM student
WHERE marks > 80
LIMIT 3;

SELECT *
FROM student
ORDER BY city ASC;

SELECT *
FROM student
ORDER BY marks ASC;

SELECT *
FROM student
ORDER BY marks DESC
LIMIT 3;

-- Aggregate Fumction
SELECT MAX(marks)
FROM student;

SELECT AVG(marks)
FROM student;

SELECT COUNT(rollno)
FROM student;

SELECT city
FROM student
GROUP BY city;


SELECT city, count(rollno)
FROM student
GROUP BY city;

SELECT city, AVG(marks)
FROM student
GROUP BY city;


SELECT city, AVG(marks)
FROM student
GROUP BY city
ORDER BY avg(marks);


SELECT city, AVG(marks)
FROM student
GROUP BY city
ORDER BY avg(marks) DESC;

SELECT grade 
FROM student
GROUP BY grade;

SELECT grade 
FROM student
GROUP BY grade
ORDER BY grade;

SELECT city, count(rollno) 
FROM student
GROUP BY city
HAVING MAX(marks) > 90;

SELECT city
FROM student
WHERE grade = "A"
GROUP BY city
HAVING MAX(marks) > 90
ORDER BY city DESC;

UPDATE student
SET grade = "O"
WHERE grade = "A";


SET SQL_SAFE_UPDATES = 0; -- to turn off safe mode
SET SQL_SAFE_UPDATES = 1; -- to turn on safe mode;


-- I have updated multiple rows column in sql
UPDATE student
SET 
    name = CASE
        WHEN rollno = 101 THEN 'anil'
        WHEN rollno = 102 THEN 'bhumika'
        WHEN rollno = 103 THEN 'chetan'
        WHEN rollno = 104 THEN 'dhruve'
        WHEN rollno = 105 THEN 'farah'
    END,
    marks = CASE
        WHEN rollno = 101 THEN 78
        WHEN rollno = 102 THEN 93
        WHEN rollno = 103 THEN 85
        WHEN rollno = 104 THEN 96
        WHEN rollno = 105 THEN 82
    END,
    grade = CASE
        WHEN rollno = 101 THEN 'C'
        WHEN rollno = 102 THEN 'A'
        WHEN rollno = 103 THEN 'B'
        WHEN rollno = 104 THEN 'A'
        WHEN rollno = 105 THEN 'B'
    END,
    city = CASE
        WHEN rollno = 101 THEN 'Pune'
        WHEN rollno = 102 THEN 'Mumbai'
        WHEN rollno = 103 THEN 'Mumbai'
        WHEN rollno = 104 THEN 'Delhi'
        WHEN rollno = 105 THEN 'Delhi'
    END
WHERE rollno IN (101, 102, 103, 104, 105);


--
-- I have updated and create multiple rows column in sql
INSERT INTO student (rollno, name, marks, grade, city)
VALUES
    (101, "anil", 78, "C", "Pune"),
    (102, "bhumika", 93, "A", "Mumbai"),
    (103, "chetan", 85, "B", "Mumbai"),
    (104, "dhruve", 96, "A", "Delhi"),
    (105, "emanuel", 12, "F", "Delhi"),
    (106, "farah", 82, "B", "Delhi") -- Note: Updated roll number for "farah"
ON DUPLICATE KEY UPDATE 
    name = VALUES(name),
    marks = VALUES(marks),
    grade = VALUES(grade),
    city = VALUES(city);

 
SELECT * FROM student;

UPDATE student 
SET grade = "B"
Where marks BETWEEN 80 AND 90;

UPDATE student 
SET marks = marks + 1;

UPDATE student 
SET marks = 12
WHERE rollno = 106;

SELECT * FROM student;

DELETE FROM student 
WHERE marks < 12;
SELECT * FROM student;


CREATE TABLE dept (
id INT PRIMARY KEY,
name VARCHAR(50)
);

INSERT INTO dept
VALUES
("101", "english"),
("102", "IT");

SELECT * FROM dept;

CREATE TABLE teacher (
id INT PRIMARY KEY,
name VARCHAR(50),
dept_id INT,
FOREIGN KEY (dept_id) REFERENCES dept(id)
);
DROP TABLE teacher;

CREATE TABLE teacher (
id INT PRIMARY KEY,
name VARCHAR(50),
dept_id INT,
FOREIGN KEY (dept_id) REFERENCES dept(id)
ON UPDATE CASCADE
ON DELETE CASCADE
);

SELECT * FROM teacher;

INSERT INTO teacher
VALUES
(101, "Adam", 101),
(102, "Eve", 102);
SELECT * FROM teacher;

UPDATE dept 
SET id = 103
WHERE id = 102;
SELECT * FROM teacher;

USE college2;
ALTER TABLE student
ADD COLUMN age INT;

ALTER TABLE student
DROP COLUMN age;
SELECT * FROM student;

ALTER TABLE student 
ADD COLUMN age INT NULL DEFAULT 19;

ALTER TABLE student
MODIFY COLUMN age VARCHAR(2);
SELECT * FROM student;

INSERT INTO student
(rollno, name, marks, age)
VALUES
(107, "gargi", 68, 100);

--

ALTER TABLE student
CHANGE age stu_age INT;

INSERT INTO student (rollno, name, marks, stu_age)
VALUES (107, "gargi", 68, 100);
SELECT * FROM student;

ALTER TABLE student
DROP COLUMN stu_age; 
SELECT * FROM student;

ALTER TABLE student
RENAME TO stud;

ALTER TABLE stud
RENAME TO student;

TRUNCATE TABLE student;
SELECT * FROM student;

INSERT INTO student
(rollno, name, marks, grade, city)
VALUES
(101, "anil", 78, "C", "Pune"),
(102, "bhumika", 98, "A", "Agra"),
(103, "chetan", 99, "A", "Mumbai"),
(104, "dhruve", 99, "A", "Lucknow"),
(105, "alam", 88, "B", "Delhi"),
(106, "farah", 89, "B", "Delhi");
SELECT * FROM student;


-- Problem2--
ALTER TABLE student
CHANGE name full_name VARCHAR(50);
SELECT * FROM student;

DELETE FROM student
WHERE marks < 80;

SELECT * FROM student;

ALTER TABLE student
DROP COLUMN grade;
SELECT * FROM student;

-- Study about join --
-- --join is used to combine rows between two or more tables,  based on related column between them;

USE college;
DROP DATABASE college;


-- 
CREATE DATABASE college;
USE college;

CREATE TABLE student(
id INT PRIMARY KEY,
name VARCHAR(50)
);

INSERT INTO student (id, name)
VALUES
(101, "adam"),
(102, "bob"),
(103, "casey");

CREATE TABLE course(
id INT PRIMARY KEY,
course VARCHAR(50)
);

INSERT INTO course (id, course)
VALUES
(102, "english"),
(105, "math"),
(103, "science"),
(107, "computer science");

SELECT * From student;
SELECT * From course;

-- Inner Join
SELECT * FROM student
INNER JOIN course
ON student.id = course.id;

SELECT * FROM student as s
INNER JOIN course as c
ON s.id = c.id;
-- ON a.id = b.id;-- ;

-- Left Join-- 
SELECT * FROM student as s
LEFT JOIN course as c
ON s.id = c.id;


-- RIGHT Join-- 
SELECT * FROM student as a
RIGHt JOIN course as b
ON a.id = b.id;


-- Full Join--  
SELECT * FROM student as a
Left JOIN course as b
ON a.id = b.id
UNION
SELECT * FROM student as a
Right JOIN course as b
ON a.id = b.id;


--
SELECT * FROM student as a
Right JOIN course as b
ON a.id = b.id
WHERE a.id IS NULL;

SELECT * FROM student as a
Left JOIN course as b
ON a.id = b.id
WHERE b.id IS NULL;

-- Self Join--  
CREATE TABLE employee(
id INT PRIMARY KEY,
name VARCHAR(50),
manager_id INT
);
INSERT INTO employee (id, name, manager_id)
VALUES
(101, "adam", 103),
(102, "bob", 104),
(103, "casey", NULL),
(104, "donald", 103);
SELECT * FROM employee;

SELECT *
FROM employee as a
JOIN employee as b
ON a.id = b.manager_id;

SELECT  a.name, b.name
FROM employee as a
JOIN employee as b
ON a.id = b.manager_id;


SELECT a.name as manager_name, b.name
FROM employee as a
JOIN employee as b
ON a.id = b.manager_id;

SELECT name from employee
UNION
SELECT name from employee;

SELECT  a.name as manager_name, b.name
FROM employee as a
JOIN employee as b
ON a.id = b.manager_id;


-- SQL Sub Queries-- 
SELECT * FROM student;

CREATE TABLE student2 (
rollno INT PRIMARY KEY,
name VARCHAR(50),
marks INT NOT NULL,
grade VARCHAR(1),
city VARCHAR(20)
);


INSERT INTO student2
(rollno, name, marks, grade, city)
VALUES
(101, "anil", 78, "C", "Pune"),
(102, "bhumika", 98, "A", "Agra"),
(103, "chetan", 99, "A", "Mumbai"),
(104, "dhruve", 99, "A", "Lucknow"),
(105, "alam", 98, "A", "Delhi"),
(106, "farah", 82, "B", "Delhi");

SELECT * FROM student2;
SELECT AVG(marks)
FROM student2;

SELECT name 
FROM student2
WHERE marks > 92.3333;

SELECT name 
FROM student2
WHERE marks > (SELECT AVG(marks) FROM student2);

SELECT rollno 
FROM student2
WHERE rollno%2 = 0;

SELECT name 
FROM student2
WHERE rollno IN (102, 104, 106);

SELECT name, rollno
FROM student2
WHERE rollno IN (102, 104, 106);


SELECT name, rollno
FROM student2
WHERE rollno IN (
 SELECT rollno
 FROM student
 WHERE rollno%2 = 0);

SELECT * FROM student2
WHERE city = "Delhi";

SELECT MAX(marks)
FROM (SELECT * FROM student2 WHERE city = "DElhi") AS temp;

SELECT MAX(marks)
FROM student2
WHERE city = "Mumbai";

-- MYSQL  VIEWS-- 
SELECT * From student2;
CREATE VIEW view1 AS
SELECT rollno, name, marks FROM student2;
SELECT * FROM view1;

SELECT * FROM view1
WHERE marks > 90;

DROP VIEW view1





