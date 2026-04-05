const Score = require("../models/score");

const createScore = async (req, res, next) => {
  try {
    const newScore = new Score(req.body);
    await newScore.save();
    res.status(201).send("Nuevo récord");
  } catch (error) {
    res.status(400).send("No se pudo realizar el registro");
  }
};

const getScore = async (req, res, next) => {
  try {
    const scores = await Score.find({ difficulty: req.query.difficulty }).sort({
      score: -1,
    }); //necesito mostrar por difficulty
    res.json(scores);
  } catch (error) {
    res.status(404).json("No se consigue el score");
  }
};

module.exports = { createScore, getScore };
