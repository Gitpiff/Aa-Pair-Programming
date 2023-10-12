const express = require("express")

const router = express.Router()

const weeklySchedule = [false, true, true, false, true, false, false]

router.get("/schedule/week", (req, res) => {
    //Send the full weekly schedule
    res.json(weeklySchedule)
})

router.put("/schedule/week/:day", (req, res) => {
    //Update schedule for specified day to have a game
    const day = parseInt(req.params.day)
    weeklySchedule.splice(day, 1, true)
    res.json(weeklySchedule)
})

module.exports = router