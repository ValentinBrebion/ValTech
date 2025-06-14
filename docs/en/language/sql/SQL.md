---
next: 
    text: 'TypeScript - Intro'
    link: '/en/language/TypeScript/IntroTypeScript'
prev: 
    text: 'Child Theme - Wordpress'
    link: '/en/language/PHP/Wordpress/Childtheme'
---

# SQL Course

SQL was developed in the 1970s by IBM to manage relational databases, based on the work of Edgar F. Codd. Researchers Donald Chamberlin and Raymond Boyce initially named this language SEQUEL (later SQL). In 1986, SQL became an international standard with ANSI, then ISO. Since then, it has been the primary language for querying and manipulating databases, used by systems like MySQL, PostgreSQL, and Oracle.

## Terminology
| Vocabulary   |      Definition      |
| ------------- | :-----------: |
| Table      | A collection of data organized in rows and columns |
| Column   |    A unique field in a table that contains the same type of data    |
| Row |   A unique record (tuple) in a table, a collection of specific data in each column   |
| Primary Key `(PRIMARY KEY)`      | A unique identifier for each row in a table |
| Foreign Key `(FOREIGN KEY)`     | A column that references the primary key of another table to create relationships between tables |

## SQL Advantages and Limitations
::: warning <h4 style="margin:0px" >Advantages ✅</h4>
- **Standardized** : Compatible across various DBMS
- **Flexible** : Capable of handling all types of data
- **Performant** : Optimizable for processing large volumes in real-time
- **Universal** : Used in all domains
:::

> [!IMPORTANT] <h4 style="margin:0px" >Limitations ❌</h4>
> - **Complex Learning** : Many concepts to learn
> - **Optimization Required** : Necessary when volumes become significant
> - **Relational Only** : Not suitable for NOSQL databases

## Types of SQL Queries
SQL includes several categories of commands, each serving a specific purpose for manipulating or managing data and database structure. The two most important types are:

> ### Data Manipulation Language (DML)
DML commands allow you to `interact with data already present in the database`. Several commands are available:

- `SELECT`: Used to read and retrieve data from the database.
Example:
```SQL
SELECT name, age FROM customers WHERE country = 'USA';
```
- `INSERT INTO`: Allows adding new data into a table.
Example:
```SQL
INSERT INTO customers (name, age, country) VALUES ('Alice Smith', 30, 'USA');
```
- `UPDATE`: Used to modify existing data in a table.
Example:
```SQL
UPDATE customers SET age = 31 WHERE name = 'Alice Smith';
```
- `DELETE`: Allows deleting specific rows from a table.
Example:
```SQL
DELETE FROM customers WHERE name = 'Alice Smith';
```

> ### Data Definition Language (DDL)
DDL commands are used to create and modify the database structure itself, including tables, views, and other objects

- `CREATE`: Used to create a new table, database, index, or other object in the database.
Example:
```SQL
CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    name VARCHAR(100),
    age INT,
    country VARCHAR(50)
);
```
- `ALTER`: Allows modifying the structure of an existing object, such as adding or removing a column in a table, changing a column's data type, or renaming an object.
Example to add a column:
```SQL
ALTER TABLE customers ADD email VARCHAR(100);
```
Example to remove a column:
```SQL
ALTER TABLE customers DROP COLUMN age;
```
- `DROP`: Used to delete an object from the database. The deletion is permanent, and all data contained in the object will be lost.
```SQL
DROP TABLE customers;
```

> ### Data Control Language (DCL)
DCL commands are used to manage access rights and permissions on database objects
- `GRANT`: Grants specific permissions to a user or group of users. You can grant access to actions like `SELECT`, `INSERT`, `UPDATE`, `DELETE`, etc., on a particular object.
Example: 
```SQL
GRANT SELECT, INSERT ON Customers TO user1;
```
*Here, the user receives read (`SELECT`) and insert (`INSERT`) permissions on the CUSTOMERS table*
- `REVOKE`: Revokes previously granted permissions from a user or group. This allows removing access to certain operations.
Example: 
```SQL
REVOKE INSERT ON customers FROM user1;
```
*The user loses the insert (`INSERT`) permission on the customers table*

> ### Transaction Control Language (TCL)
<br>

::: info What is a transaction? 🤔
A database transaction is a set of SQL operations (like `INSERT`, `UPDATE`, `DELETE`) executed together to accomplish a specific task. It is processed as a unit: either all operations succeed, or they all fail.
:::

::: details **<u>COMMIT</u>** {open}
Permanently validates the changes made by a transaction in the database. Once COMMIT is executed, the changes are saved and can no longer be undone by a ROLLBACK.
```sql
BEGIN TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE account_id = 1;
UPDATE accounts SET balance = balance + 100 WHERE account_id = 2;
COMMIT;
```
:::
::: details **<u>ROLLBACK</u>** {open}
Cancels all modifications made by an ongoing transaction if it hasn't been validated with COMMIT yet. This allows returning to the initial state in case of error.
```sql
BEGIN TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE account_id = 1;
UPDATE accounts SET balance = balance + 100 WHERE account_id = 2;
ROLLBACK;
```
:::
::: details **<u>SAVEPOINT</u>** {open}
Creates an intermediate savepoint in a transaction, allowing you to undo only a portion of the changes made since that point, without canceling the entire transaction.
```sql
BEGIN TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE account_id = 1;
SAVEPOINT step1;
UPDATE accounts SET balance = balance + 100 WHERE account_id = 2;
ROLLBACK TO step1;  -- Return to the state at the savepoint
COMMIT;
```
:::

## Table Relationships (Joins)
Joins allow retrieving data from multiple tables that are linked together.

### Inner Join (`INNER JOIN`)
INNER JOIN is a type of join that retrieves only the records that have a match in both tables involved in the join.
Let's say we have an orders table:
```sql
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
    product VARCHAR(50),
    amount DECIMAL(10, 2),
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);
```
To retrieve orders with customer names:
```sql
SELECT customers.name, orders.product, orders.amount
FROM customers
INNER JOIN orders ON customers.customer_id = orders.customer_id;
```
### Left Join (`LEFT JOIN`)
LEFT JOIN is a type of join in SQL that retrieves all records from the left table (in the query) and matching records from the right table if a match exists. If no match is found in the right table, the columns from that table will be filled with NULL values.
Let's say we have an orders table:
```sql
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
    product VARCHAR(50),
    amount DECIMAL(10, 2),
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);
```
In this example, customers is the left table and orders is the right table. If we use a LEFT JOIN, we'll get all rows from customers, even those that don't have a match in orders.

Query:
```sql
SELECT customers.name, orders.product, orders.amount
FROM customers
LEFT JOIN orders ON customers.customer_id = orders.customer_id;
``` 