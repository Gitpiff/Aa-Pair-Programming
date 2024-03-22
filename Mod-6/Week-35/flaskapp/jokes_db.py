import sqlite3

DB_FILE = "dev.db" # normally this would be in our .env file

with sqlite3.connect(DB_FILE) as conn:
    curs = conn.cursor()
    curs.execute(
        """ 
            CREATE TABLE jokes(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            joke_buddy VARCHAR(250),
            punchline VARCHAR(250),
            rating VARCHAR(15)
            );
            
        """
    )