const express = require('express');
const router = express.Router();

//Import Models needed for the association
const { Fan, Player } = require('../db/models')

router.get('/:fanId/drafts', async (req, res) => {
    const { fanId } = req.params
    //Eager Loading
    const fan = await Fan.findByPk(fanId, {
        include: [
            {
                model: Player
            }
        ]
    })

    res.json(fan.Players)
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params

    const deletedFan = await Fan.findByPk(id)
    await deletedFan.destroy()
    return res.json(
        {
            message: "Successfully deleted"
        }
    )
})

module.exports = router;