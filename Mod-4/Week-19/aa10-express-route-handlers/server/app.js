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

//Get All Artists
app.get("/artists", (req, res) => {
  res.json(getAllArtists())
})

//Get Latest Artist
app.get("/artists/latest", (req, res) => {
  res.json(getLatestArtist())
})

//Add Artist
app.post("/artists", (req, res) => {
  const data = req.body
  res.status(201)
  res.json(addArtist(data))
})

//Get Albums For Latest Artist
app.get("/artists/latest/albums", (req, res) => {
  res.json(getAlbumsForLatestArtist())
})

//Get Artist By ArtistId
app.get("/artists/:artistId", (req, res) => {
  res.json(getArtistByArtistId(1))
})

//Edit Artist by ArtistId
app.put("/artists/:artistId", (req, res) => {
  const artistId = req.params.artistId
  const data = req.body
  res.json(editArtistByArtistId(artistId, data)) //order matters
})

//Edit Artist by ArtistId
app.patch("/artists/:artistId", (req, res) => {
  const artistId = req.params.artistId
  const data = req.body
  res.json(editArtistByArtistId(artistId, data)) //order matters
})

//Delete Artist By ArtistId
app.delete("/artists/:artistId", (req, res) => {
  const artistId = req.params.artistId
  req.body = {
    message: "Successfully deleted"
  }
  res.send(req.body)
  res.json(deleteArtistByArtistId(artistId))
})

//Get Albums By ArtistId
app.get("/artists/:artistId/albums", (req, res) => {
  const artistId = req.params.artistId
  res.json(getAlbumsByArtistId(artistId))
})

//Add Artist
app.post("/artists", (req, res) => {
  const data = req.body
  res.status(201)
  res.json(addArtist(data))
})

//Add Album By ArtistIs
app.post("/artists/:artistId/albums", (req, res) => {
  const artistId = req.params.artistId
  const data = req.body
  res.status(201)
  res.json(addAlbumByArtistId(artistId, data))
})

//Get Album By AlbumId
app.get("/albums/:albumId", (req, res) => {
  res.json(getAlbumByAlbumId(1))
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