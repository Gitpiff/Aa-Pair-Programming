----------
-- Step 0 - Create a Query 
----------
-- Query: Find a count of `toys` records that have a price greater than
    -- 55 and belong to a cat that has the color "Olive".

    -- Your code here 
    SELECT COUNT()
    FROM toys JOIN cat_toys ON toys.id = cat_toys.toy_id -- joins toys with toy_id in cat_toys table
    JOIN cats ON cats.id = cat_toys.cat_id    -- joins cats with cat.id in the cat_toys table
    WHERE toys.price > 55 AND cats.color = "Olive";

-- Paste your results below (as a comment):
-- ─────────┐
-- │ COUNT() │
-- ├─────────┤
-- │ 215     │



----------
-- Step 1 - Analyze the Query
----------
-- Query:

    -- Your code here 
    EXPLAIN QUERY PLAN
    SELECT COUNT()
    FROM toys JOIN cat_toys ON toys.id = cat_toys.toy_id -- joins toys with toy_id in cat_toys table
    JOIN cats ON cats.id = cat_toys.cat_id    -- joins cats with cat.id in the cat_toys table
    WHERE toys.price > 55 AND cats.color = "Olive";

-- Paste your results below (as a comment):
-- QUERY PLAN
-- |--SCAN cat_toys
-- |--SEARCH toys USING INTEGER PRIMARY KEY (rowid=?)
-- `--SEARCH cats USING INTEGER PRIMARY KEY (rowid=?)

-- What do your results mean?
    -- We need an index in cat_toys to optimize the query
    -- Was this a SEARCH or SCAN?
        -- both

    -- What does that mean?




----------
-- Step 2 - Time the Query to get a baseline
----------
-- Query (to be used in the sqlite CLI):

    -- Your code here 
    .timer on
    SELECT COUNT()
    FROM toys JOIN cat_toys ON toys.id = cat_toys.toy_id 
    JOIN cats ON cats.id = cat_toys.cat_id    
    WHERE toys.price > 55 AND cats.color = "Olive";

-- Paste your results below (as a comment):




----------
-- Step 3 - Add an index and analyze how the query is executing
----------

-- Create index:

    -- Your code here 

-- Analyze Query:
    -- Your code here 

-- Paste your results below (as a comment):


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

