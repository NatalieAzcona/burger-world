const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema(
  {
    playerName: { type: String, required: true, trim: true },
    difficulty: { type: String, enum: ["easy", "medium", "hard"] },
    score: { type: Number, default: 0 },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Score", scoreSchema);
