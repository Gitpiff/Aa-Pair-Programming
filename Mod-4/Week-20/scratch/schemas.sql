CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(20) UNIQUE NOT NULL, --VARCHAR will allow any length up to and incluiding 20
    password CHAR(60) NOT NULL -- CHAR will only allow a string length of 60
);

