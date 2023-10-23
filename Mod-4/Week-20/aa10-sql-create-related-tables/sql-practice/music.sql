-- This ensures that SQLite enforces FOREIGN KEY constraints
PRAGMA foreign_keys = 1;
DROP TABLE IF EXISTS instruments;
DROP TABLE IF EXISTS musicians;
DROP TABLE IF EXISTS bands;

-- Make one to many relationship between the bands and the musicians
    --//Create a One to Many Relationship
-- Parent-Child like relationship, where the One is the Parent, and the Many the children
-- Place the FOREGING KEY into the "Child" table  *2
-- But before creating the foreging key we must create the column *1

    --//Create a Many to Many
--To create a musician_instrument table we need an id, and TWO FOREIGN KEYS
--We need to reference two "Parent" tables to get info about who's musician the instruments belongs to
--and which intrument it is, to do so we need to have TWO FOREIGN KEYS
--The FOREIGN KEYS will be musician_id & musician_id
--They will reference the musician's table at the id and the instruments table also at the id

  -- //Bands have many mnusicians -One to Many- 
CREATE TABLE bands (    
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(100)
);

CREATE TABLE musicians (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100),
  band_id INTEGER,        --*1
  FOREIGN KEY (band_id) REFERENCES bands(id) --*2
);
CREATE TABLE instruments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  type VARCHAR(100) NOT NULL
);

CREATE TABLE musician_instrument (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  musician_id INTEGER,
  instrument_id INTEGER,
  FOREIGN KEY (musician_id) REFERENCES musicians(id)
  FOREIGN KEY (instrument_id) REFERENCES instruments(id)  
)