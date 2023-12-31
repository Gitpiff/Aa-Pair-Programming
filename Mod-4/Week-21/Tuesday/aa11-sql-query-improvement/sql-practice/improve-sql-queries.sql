----------
-- Step 0 - Create a Query 
----------
-- Query: Select all cats that have a toy with an id of 5

    -- Your code here 
    -- SELECT * FROM cats
    -- JOIN cat_toys
    -- ON cats.id = cat_toys.cat_id
    -- WHERE cat_toys.toy_id = 5;

    SELECT * FROM cats 
    JOIN cat_toys ON cats.id = cat_toys.cat_id
    JOIN toys ON toys.id = cat_toys.toy_id
    WHERE cat_toys.toy_id = 5;

-- Paste your results below (as a comment):
--    ┌──────┬─────────┬──────────┬────────────┬───────┬────────┬────────┐
-- │  id  │  name   │  color   │   breed    │  id   │ cat_id │ toy_id │
-- ├──────┼─────────┼──────────┼────────────┼───────┼────────┼────────┤
-- │ 4002 │ Rachele │ Maroon   │ Foldex Cat │ 4509  │ 4002   │ 5      │
-- │ 31   │ Rodger  │ Lavender │ Oregon Rex │ 10008 │ 31     │ 5      │
-- │ 77   │ Jamal   │ Orange   │ Sam Sawet  │ 10051 │ 77     │ 5      │
-- └──────┴─────────┴──────────┴────────────┴───────┴────────┴────────┘




----------
-- Step 1 - Analyze the Query
----------
-- Query:

    -- Your code here 
        --EXPLAIN QUERY PLAN SELECT * FROM cat_toys WHERE cat_id = 5; 
        -- EXPLAIN QUERY PLAN SELECT * FROM cats 
        -- JOIN cat_toys ON cats.id = cat_toys.cat_id  
        -- WHERE cat_toys.toy_id = 5;
    EXPLAIN QUERY PLAN
    SELECT * FROM cats 
    JOIN cat_toys ON cats.id = cat_toys.cat_id
    JOIN toys ON toys.id = cat_toys.toy_id
    WHERE cat_toys.toy_id = 5;
-- Paste your results below (as a comment):
      -- QUERY PLAN
        |--SEARCH toys USING INTEGER PRIMARY KEY (rowid=?)
        |--SCAN cat_toys
        --SEARCH cats USING INTEGER PRIMARY KEY (rowid=?)
       
-- What do your results mean?

    -- Was this a SEARCH or SCAN?
        -- SCAN

        --SEARCH
    -- What does that mean?
       

----------
-- Step 2 - Time the Query to get a baseline
----------
-- Query (to be used in the sqlite CLI):

    -- Your code here 
    -- .timer on
    --  SELECT * FROM cats 
    -- JOIN cat_toys ON cats.id = cat_toys.cat_id
    -- JOIN toys ON toys.id = cat_toys.toy_id
    -- WHERE cat_toys.toy_id = 5;
-- Paste your results below (as a comment):
-- ┌──────┬─────────┬──────────┬────────────┬───────┬────────┬────────┐
-- │  id  │  name   │  color   │   breed    │  id   │ cat_id │ toy_id │
-- ├──────┼─────────┼──────────┼────────────┼───────┼────────┼────────┤
-- │ 4002 │ Rachele │ Maroon   │ Foldex Cat │ 4509  │ 4002   │ 5      │
-- │ 31   │ Rodger  │ Lavender │ Oregon Rex │ 10008 │ 31     │ 5      │
-- │ 77   │ Jamal   │ Orange   │ Sam Sawet  │ 10051 │ 77     │ 5      │
-- └──────┴─────────┴──────────┴────────────┴───────┴────────┴────────┘
-- Run Time: real 0.001 user 0.000592 sys 0.000198



----------
-- Step 3 - Add an index and analyze how the query is executing
----------

-- Create index:

    -- Your code here 
    CREATE INDEX 
    idx_cat_toys_toy_id ON cat_toys(toy_id);

    EXPLAIN QUERY PLAN
    SELECT * FROM cats 
    JOIN cat_toys ON cats.id = cat_toys.cat_id
    JOIN toys ON toys.id = cat_toys.toy_id
    WHERE cat_toys.toy_id = 5;

-- Analyze Query:
    -- Your code here 

-- Paste your results below (as a comment):
    QUERY PLAN
    |--SEARCH toys USING INTEGER PRIMARY KEY (rowid=?)
    |--SEARCH cat_toys USING INDEX idx_cat_toys_toy_id (toy_id=?)
    --SEARCH cats USING INTEGER PRIMARY KEY (rowid=?)

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
