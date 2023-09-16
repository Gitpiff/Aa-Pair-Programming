const http = require('http');
const fs = require('fs');

const { Player } = require('./game/class/player');
const { World } = require('./game/class/world');

const worldData = require('./game/data/basic-world-data');

let player;
let world = new World();
world.loadWorld(worldData);

const server = http.createServer((req, res) => {
  function redirectTo(urlPath) {
    res.statusCode = 302;
    res.setHeader('Location', urlPath);
    return res.end();
  }

  /* ============== ASSEMBLE THE REQUEST BODY AS A STRING =============== */
  let reqBody = '';
  req.on('data', (data) => {
    reqBody += data;
  });

  req.on('end', () => { // After the assembly of the request body is finished
    /* ==================== PARSE THE REQUEST BODY ====================== */
    if (reqBody) {
      req.body = reqBody
        .split("&")
        .map((keyValuePair) => keyValuePair.split("="))
        .map(([key, value]) => [key, value.replace(/\+/g, " ")])
        .map(([key, value]) => [key, decodeURIComponent(value)])
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});
    }

    /* ======================== ROUTE HANDLERS ========================== */
    // Phase 1: GET /
    if (req.method === "GET" && req.url === "/") {
      const htmlFile = fs.readFileSync("./views/new-player.html", "utf-8")

      const resBody = htmlFile.replace(/#{availableRooms}/g, world.availableRoomsToString())
      res.statusCode = 200
      res.setHeader("Content-Type", "text/html")
      res.write(resBody)
      return res.end()
    }

    // Phase 2: POST /player
    if (req.method === "POST" && req.url === "/player") {

      const { name, roomId } = req.body

      player = new Player(name, world.rooms[roomId])

      res.statusCode = 200
      return redirectTo(`/rooms/${roomId}`)
    }

    // Phase 3: GET /rooms/:roomId
    if (req.method === "GET" && req.url.startsWith("/rooms")) {
      const urlParts = req.url.split("/");
      const roomId = urlParts[2];
      if (urlParts.length === 3 && roomId) {
        if (roomId == player.currentRoom.id) {
          const room = player.currentRoom;

          const htmlFile = fs.readFileSync("./views/room.html", "utf-8");
          let reqBody = htmlFile
            .replace(/#{roomName}/g, room.name)
            .replace(/#{roomItems}/g, room.itemsToString())
            .replace(/#{inventory}/g, player.inventoryToString())
            .replace(/#{exits}/g, room.exitsToString());

          res.statusCode = 200;
          res.setHeader("Content-Type", "text/html");
          res.write(reqBody);
          return res.end();
        } else {
          return redirectTo(`/rooms/${player.currentRoom.id}`);
        }
      }
    }

    // Phase 4: GET /rooms/:roomId/:direction

    // Phase 5: POST /items/:itemId/:action

    // Phase 6: Redirect if no matching route handlers
  })
});

const port = 9000;

server.listen(port, () => console.log('Server is listening on port', port));
