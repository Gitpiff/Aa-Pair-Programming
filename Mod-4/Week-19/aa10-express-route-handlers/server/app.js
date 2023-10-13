// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId
} = require('./data');

const express = require('express');
const app = express();

// Your code here 
app.use(express.json())

app.get("/artists", (req, res) => {
  res.json(getAllArtists())
})

app.get("/artists/latest", (req, res) => {
  res.json(getLatestArtist())
})

app.post("/artists", (req, res) => {
  const data = req.body
  res.status(201)
  res.json(addArtist(data))
})

app.get("/artists/latest/albums", (req, res) => {
  res.json(getAlbumsForLatestArtist())
})

app.get("/artists/:artistId", (req, res) => {
  res.json(getArtistByArtistId(1))
})

app.put("/artists/:artistId", (req, res) => {
  const artistId = req.params.artistId
  const data = req.body
  res.json(editArtistByArtistId(artistId, data)) //order matters
})

app.patch("/artists/:artistId", (req, res) => {
  const artistId = req.params.artistId
  const data = req.body
  res.json(editArtistByArtistId(artistId, data)) //order matters
})

app.delete("/artists/:artistId", (req, res) => {
  const artistId = req.params.artistId
  req.body = {
    message: "Successfully deleted"
  }
  res.send(req.body)
  res.json(deleteArtistByArtistId(artistId))
})

app.get("/artists/:artistId/albums", (req, res) => {
  const artistId = req.params.artistId
  res.json(getAlbumsByArtistId(artistId))
})

app.post("/artists", (req, res) => {
  const data = req.body
  res.status(201)
  res.json(addArtist(data))
})

app.post("/artists/:artistId/albums", (req, res) => {
  const artistId = req.params.artistId
  const data = req.body
  res.status(201)
  res.json(addAlbumByArtistId(artistId, data))
})

app.get("/artists/latest/albums", (req, res) => {
  res.json(getAlbumsForLatestArtist())
})

app.get("/artists/latest/albums", (req, res) => {
  res.json(getAlbumsForLatestArtist())
})

app.get("/artists/latest/albums", (req, res) => {
  res.json(getAlbumsForLatestArtist())
})

app.get("/artists/latest/albums", (req, res) => {
  res.json(getAlbumsForLatestArtist())
})

app.get("/artists/latest/albums", (req, res) => {
  res.json(getAlbumsForLatestArtist())
})

app.get("/artists/latest/albums", (req, res) => {
  res.json(getAlbumsForLatestArtist())
})

app.get("/artists/latest/albums", (req, res) => {
  res.json(getAlbumsForLatestArtist())
})

app.get("/artists/latest/albums", (req, res) => {
  res.json(getAlbumsForLatestArtist())
})

app.get("/artists/latest/albums", (req, res) => {
  res.json(getAlbumsForLatestArtist())
})

app.get("/artists/latest/albums", (req, res) => {
  res.json(getAlbumsForLatestArtist())
})

app.get("/artists/latest/albums", (req, res) => {
  res.json(getAlbumsForLatestArtist())
})

app.get("/artists/latest/albums", (req, res) => {
  res.json(getAlbumsForLatestArtist())
})


// DO NOT MODIFY
if (require.main === module) {
  const port = 8000;
  app.listen(port, () => console.log('Server is listening on port', port));
} else {
  module.exports = app;
}