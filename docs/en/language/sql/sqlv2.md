---
next: 
    text: 'TypeScript - Intro'
    link: 'fr/language/TypeScript/IntroTypeScript'
prev: 
    text: 'First SQL Course'
    link: 'fr/language/sql/SQL'
---
# Second SQL Course

## Indexing and Query Optimization

**Definition:**  
Indexing is a technique that speeds up access to data in a table by creating an additional data structure. Query optimization involves writing efficient SQL queries to reduce processing time.

**Explanation:**  
- Indexes allow you to quickly find rows that match a condition.  
- A bad index or no index can make queries very slow.  
- Optimization involves using indexes, reducing unnecessary joins, and analyzing the execution plan.

**SQL Example:**
```sql
-- Create an index on the 'name' column
CREATE INDEX idx_name ON Employees(name);

-- Check the execution plan of a query
EXPLAIN SELECT * FROM Employees WHERE salary > 3000;
```
## SQL Functions

Definition:
SQL functions are tools that allow you to manipulate or aggregate data.

Explanation:

Aggregation functions: calculations over multiple rows (SUM, AVG, COUNT).

Scalar functions: calculations on a single value (UPPER, ROUND).

Analytic functions: advanced calculations over a set of rows without summarizing (ROW_NUMBER, RANK).

SQL exemple:
```sql
-- Average salary
SELECT AVG(salary) AS avg_salary FROM Employees;

-- Convert to uppercase and round
SELECT UPPER(name), ROUND(salary, 2) FROM Employees;

-- Ranking employees by salary
SELECT name, salary,
       RANK() OVER (ORDER BY salary DESC) AS rank
FROM Employees;
```
## Subqueries and Nested Queries

Definition:
A subquery is an SQL query placed inside another query. A nested query depends on another query to execute.

Explanation:

Simple subqueries return a single value or a set of values.

Correlated subqueries depend on each row of the outer query.

Nested queries can replace some joins to simplify reading.

SQL Example:
```sql
-- Simple subquery
SELECT name FROM Employees
WHERE salary > (SELECT AVG(salary) FROM Employees);

-- Correlated subquery
SELECT e1.name FROM Employees e1
WHERE salary > (SELECT AVG(salary) 
                FROM Employees e2 
                WHERE e1.dept_id = e2.dept_id);
```
## Views and Stored Procedures

Definition:

View: a virtual table based on the result of a query.

Stored Procedure: a set of SQL queries stored for reuse.

Explanation:

Views simplify frequent queries and help secure data access.

Stored procedures centralize logic, reduce errors, and improve performance.

SQL Example:
```sql
-- View
CREATE VIEW employee_view AS
SELECT name, salary FROM Employees WHERE salary > 3000;

-- Stored procedure
CREATE PROCEDURE IncreaseSalary(@id INT, @rate FLOAT)
AS
UPDATE Employees
SET salary = salary * (1 + @rate)
WHERE id = @id;
```
## Triggers

Definition:
A trigger is an automatic action that runs when an operation (INSERT, UPDATE, DELETE) occurs on a table.

Explanation:

Used to automate actions like logging or data validation.

Helps maintain data integrity.

SQL Example:
```sql
CREATE TRIGGER LogDeletion
AFTER DELETE ON Employees
FOR EACH ROW
INSERT INTO Deleted_Employees VALUES (OLD.id, OLD.name, NOW());
```
## Advanced Transaction Management

Definition:
A transaction is a set of SQL operations that must be executed together to ensure data integrity.

Explanation:

ACID: Atomicity, Consistency, Isolation, Durability.

Isolation levels control concurrent reads.

COMMIT to confirm, ROLLBACK to cancel.

SQL Example:
```sql
BEGIN TRANSACTION;

UPDATE Accounts SET balance = balance - 100 WHERE id = 1;
UPDATE Accounts SET balance = balance + 100 WHERE id = 2;

COMMIT; -- confirm
-- ROLLBACK; -- cancel if error
```

## Database Security

Definition:
Practices to protect data from unauthorized access and loss.

Explanation:

User and privilege management (GRANT, REVOKE).

Encryption of sensitive data.

Auditing and prevention of SQL injection.

SQL Example:
```sql
GRANT SELECT, INSERT ON Employees TO app_user;
REVOKE DELETE ON Employees FROM app_user;
```

## Normalization and Denormalization

Definition:

Normalization: organizing data to eliminate redundancy and anomalies.

Denormalization: introducing redundancy to improve performance.

Explanation:

Normalization: 1NF → 2NF → 3NF → BCNF.

Denormalization: combine tables to avoid frequent joins.

SQL Example:
```sql
-- Normalization: separate Clients table
Clients(id, name, address)
Orders(id, client_id, order_date)

-- Denormalization: include client_name directly in Orders
Orders(id, client_id, client_name, order_date)
```

## Temporal Data Management

Definition:
Temporal data includes dates and times to track events over time.

Explanation:

Allows tracking the history of records.

Uses `DATE`, `TIMESTAMP`, and functions like `NOW()`, `DATEDIFF()`.

SQL Example:
```sql
INSERT INTO Employees (name, salary, hire_date)
VALUES ('Alice', 3500, CURRENT_DATE);
```

## Integration with Other Technologies

Definition:
Connecting databases with external systems or applications.

Explanation:

ETL: Extract, Transform, Load.

JDBC/ODBC: application connectivity.

Big Data: Hadoop, Spark.

REST API: expose data.

Error and Exception Handling

Definition:
Mechanisms to handle errors during SQL query execution.

Explanation:

Captures and handles errors to avoid interruptions.

TRY...CATCH (SQL Server), EXCEPTION (PL/SQL).

SQL Example:
```sql
BEGIN
    INSERT INTO Employees VALUES (1, 'John', 3000);
EXCEPTION
    WHEN DUP_VAL_ON_INDEX THEN
        DBMS_OUTPUT.PUT_LINE('Error: key already exists.');
END;
```
## Case Studies and Practical Projects

Examples:

Business management: employees, departments, projects.

E-commerce: products, orders, customers.

Banking system: accounts, transactions, security.

## NoSQL vs SQL Databases

Definition:

SQL: relational, fixed schema, ACID transactions.

NoSQL: flexible, large-scale data, variable schema.

Explanation:

SQL → consistency and integrity, suited for banks and ERP.

NoSQL → scalability and performance, suited for social networks and IoT.