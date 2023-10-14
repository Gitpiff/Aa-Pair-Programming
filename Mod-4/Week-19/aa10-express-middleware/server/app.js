const express = require('express');
const dogs = require("./routes/dogs")
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

app.use("/dogs", dogs)

// For testing purposes, GET /
app.get('/', (req, res) => {
  req.url
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
  next(err)
});

app.use((err, req, res, next) => {
  if (process.env.NODE_ENV === "development") {
    res.status(err.statusCode || 500).json({
      ERROR: err.message,
      Status: err.statusCode || 500,
      Stack: err.stack
    })
  } else {
    res.status(err.statusCode).json({
      ERROR: err.message,
      Status: err.statusCode || 500
    })
  }
})

//Jame's Code For testing express-async-errors
app.get("/test-err", async (req, res) => {
  throw new Error("Hello Error")
})

app.use((req, res, next) => {
  const error = new Error("REsource Not Found")
  error.statusCode = 404
  next(error)
})

app.use((err, req, res, next) => {
  const isProduction = process.env.NODE_ENV === "production"
  const status = err.statusCode
  const response = {
    statusCode: statusCode || 500,
    message: err.message || "Something went wrong",
    //stack: isProduction ? "production enviroment" : err.stack
  }
  if(!isProduction) response.stack = err.stack
  console.error(err)
  res.status(status).json(response)
})

const port = process.env.PORT;
app.listen(port, () => console.log('Server is listening on port', port));
