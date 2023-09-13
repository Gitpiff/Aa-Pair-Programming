const http = require("http")

const server = http.createServer((req, res) => {
    console.log(req)
})

const port = 9000

server.listen(port, () => console.log("Server is listening on port", port))