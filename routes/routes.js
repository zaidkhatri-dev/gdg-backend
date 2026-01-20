const { Router } = require("express");
const {getProjectData, getPollData, handleVote, getResultProjectData} = require("../controllers/handlers");

const router = Router()

router.get("/projects",getProjectData)

router.get("/poll", getPollData)

router.post("/vote", handleVote)

router.get("/result/projects", getResultProjectData)

module.exports = router