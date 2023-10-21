CREATE TABLE IF NOT EXISTS friends (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL
);  

            -- Single Entry
-- INSERT INTO friends (id, first_name, last_name) VALUES (1, "Whale", "Whalison");

            -- Multiple Entry
-- INSERT INTO friends (id, first_name, last_name) VALUES (1, "Whale", "Whalison"), (2, "Pan", "Panison");