-- This ensures that SQLite enforces FOREIGN KEY constraints
PRAGMA foreign_keys = 1;

-- Your code here 
CREATE TABLE customers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    phone_number NUMERIC(10, 0)
);

CREATE TABLE departments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(100) NOT NULL
)

CREATE TABLE tools (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    price NUMERIC(4, 2),
    department_id INTEGER,
    FOREIGN KEY (department_id) REFERENCES departments(id)
)
