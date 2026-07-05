CREATE TABLE person(
   id INT,
   name VARCHAR(100),
   city VARCHAR(100)
)

INSERT INTO person (id, name, city)
VALUES
(101, 'Raju', 'Delhi'),
(102, 'Alam', 'Chennia'),
(103, 'Sham', 'Sham');

SELECT * FROM  person;
SELECT name, city FROM  person;


UPDATE person
   SET city = 'Bangalore'
WHERE
   name='Raju';
   SELECT * FROM  person;

DELETE FROM person
WHERE id = 105;
SELECT * FROM  person;


INSERT INTO person
Values
(101, 'Alex', 'Noida')
SELECT * FROM  person;

INSERT INTO person(id, name)
Values
(102, 'Noor');
SELECT * FROM  person;








   