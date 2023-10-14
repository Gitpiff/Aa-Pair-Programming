const express = require('express');
const app = express();
app.use(express.json())
require("express-async-errors")

const log = (req, res, next) => {
  res.on('finish', () => {
    console.log(req.method, req.url, res.statusCode)
  });
  next()
}

app.use(log)

// For testing purposes, GET /
app.get('/', (req, res) => {
  req.ur
  res.json("Express server running. No content provided at root level. Please use another route.");
});

// For testing express.json middleware
app.post('/test-json', (req, res, next) => {
  // send the body as JSON with a Content-Type header of "application/json"
  // finishes the response, res.end()
  res.status(201).json(req.body);
  next();
});

// For testing express-async-errors
app.use((req, res, next) => {
  const err = new Error("The requested resource couldn't be found.")
  res.status(404)
  next(err)
});

app.use((err, req, res, next) => {
  res.json({ERROR: err.message})
  console.error(err.message)
})

const port = 9000;
app.listen(port, () => console.log('Server is listening on port', port));
