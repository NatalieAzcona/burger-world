const express = require("express");
const { createScore, getScore } = require("../controllers/scoreController");
const router = express.Router();

router.get("/", getScore);
router.post("/newScore", createScore);

module.exports = router;
