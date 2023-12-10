const express = require('express');
const router = express.Router();

const { Team, Player } = require('../db/models')

router.post('/:id/players', async (req, res) => {
    const { id } = req.params
    const { firstName, lastName, number, isRetired } = req.body

    //const team = await Team.findByPk(id)
    const newPlayer = await Player.create(
        {
            firstName,
            lastName,
            number,
            isRetired,
            currentTeamId: parseInt(id)
        }
    )

    return res.json(newPlayer)

})

module.exports = router;
