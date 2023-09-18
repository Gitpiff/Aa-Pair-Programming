const http = require('http');
const fs = require("fs");

const contentType = {
  html: "text/html",
  css: "text/css",
  jpg: "image/jpg",
  jpeg: "image/jpeg"
}


const server = http.createServer((req, res) => {
  // Your code here
  if(req.url.startsWith("/static")) {
    const allParts = req.url.split("/")
    console.log(allParts)

    const type = allParts[2]
    const fileName = allParts[3]
    const extension = allParts[3].split(".")[1]
    
    const file = fs.readFileSync(`./assets/${type}/${fileName}`)
    res.statusCode = 200
    res.setHeader("Content-Type", contentType[extension])

    return res.end(file)
  }


  const htmlTemplate = fs.readFileSync("./index.html", "utf-8")
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html")

  res.end(htmlTemplate)
});

const port = 9000;

server.listen(port, () => console.log('Server is listening on port', port));