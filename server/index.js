require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const router = require("./routes/scoreRouter.js");

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB conectado"))
  .catch((err) => console.log(err));

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use("/scores", router);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
