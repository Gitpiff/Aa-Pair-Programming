const express = require("express")

const router = express.Router()

const roster = {
    pg: 'Randy',
    sg: 'Anthony',
    sf: 'Noah',
    pf: 'Benjamin',
    c: 'Miles'
}

router.get("/roster", (req, res) => {
    //Send roster data
    res.json(roster)
})

router.put("roster/:position", (req, res) => {
    //Update position with data from request body
    const position = req.params.position 
    const newPlayer = req.body.name
    roster[position] = newPlayer
    res.json(roster)
})

router.delete("/roster/:position", (req, res) => {
    //Remove player from position
    const position = req.params.position
    delete roster[position]
    res.json(roster)
})

module.exports = router