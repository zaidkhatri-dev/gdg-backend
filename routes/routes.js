const { Router } = require("express");
const {getProjectData, getPollData, handleVote, getResultProjectData, checkHealth} = require("../controllers/handlers");

const router = Router()

router.get("/projects",getProjectData)

router.get("/poll", getPollData)

router.post("/vote", handleVote)

router.get("/result/projects", getResultProjectData)

router.get("/health", checkHealth)

module.exports = router