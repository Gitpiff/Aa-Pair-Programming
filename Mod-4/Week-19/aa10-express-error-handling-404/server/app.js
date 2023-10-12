const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('GET / This is the root URL');
});

//Error Handler
//Need to create an error before throwing it
app.use((req, res, next) => {
  const err = new Error("Resource not found")
  err.statusCode = 404
  next(err)
})

//Catch error and handle it
app.use((err, req, res, next) => {
  console.log(err)
  const status = err.statusCode || 500
  res.status(status).json({
    message: err.message || "Something went wrong",
    status 
  })
})
const port = 9000;
app.listen(port, () => console.log('Server is listening on port', port));
