----------
-- Step 0 - Create a Query 
----------
-- Query: Find a count of `toys` records that have a price greater than
    -- 55 and belong to a cat that has the color "Olive".

    -- Your code here 
    SELECT COUNT() FROM toys
    JOIN cat_toys ON toys.id = cat_toys.toy_id
    JOIN cats ON cats.id = cat_toys.cat_id
    WHERE toys.price > 55 AND cats.color = 'Olive';

-- Paste your results below (as a comment):
    -- 215



----------
-- Step 1 - Analyze the Query
----------
-- Query:

    -- Your code here 
EXPLAIN QUERY PLAN
SELECT COUNT() FROM toys
JOIN cat_toys ON toys.id = cat_toys.toy_id
JOIN cats ON cats.id = cat_toys.cat_id
WHERE toys.price > 55 AND cats.color = 'Olive';
-- Paste your results below (as a comment):
QUERY PLAN
|--SCAN cat_toys
|--SEARCH toys USING INTEGER PRIMARY KEY (rowid=?)
--SEARCH cats USING INTEGER PRIMARY KEY (rowid=?)
--Run Time: real 0.000 user 0.000071 sys 0.000010

-- What do your results mean?

    -- Was this a SEARCH or SCAN?


    -- What does that mean?




----------
-- Step 2 - Time the Query to get a baseline
----------
-- Query (to be used in the sqlite CLI):

    -- Your code here 
SELECT COUNT() FROM toys
JOIN cat_toys ON toys.id = cat_toys.toy_id
JOIN cats ON cats.id = cat_toys.cat_id
WHERE toys.price > 55 AND cats.color = 'Olive';
-- Paste your results below (as a comment):
--Run Time: real 0.006 user 0.006134 sys 0.000116



----------
-- Step 3 - Add an index and analyze how the query is executing
----------

-- Create index:

    -- Your code here 
    CREATE INDEX idx_cat_toys_cat_id ON cat_toys(cat_id);
    CREATE INDEX idx_cat_toys_toy_id ON cat_toys(toy_id);
    CREATE INDEX idx_cat_color ON cats(color);

    EXPLAIN QUERY PLAN
    SELECT COUNT() FROM toys
    JOIN cat_toys ON toys.id = cat_toys.toy_id
    JOIN cats ON cats.id = cat_toys.cat_id
    WHERE toys.price > 55 AND cats.color = 'Olive';
-- Analyze Query:
    -- Your code here 

-- Paste your results below (as a comment):
--Run Time: real 0.001 user 0.000079 sys 0.000009

-- Analyze Results:

    -- Is the new index being applied in this query?




----------
-- Step 4 - Re-time the query using the new index
----------
-- Query (to be used in the sqlite CLI):

    -- Your code here 

-- Paste your results below (as a comment):


-- Analyze Results:
    -- Are you still getting the correct query results?


    -- Did the execution time improve (decrease)?


    -- Do you see any other opportunities for making this query more efficient?



---------------------------------
-- Notes From Further Exploration
---------------------------------

