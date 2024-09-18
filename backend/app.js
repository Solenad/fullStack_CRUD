require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("[Full Stack API] Connected to MongoDB Database successful.");
  })
  .catch((e) => {
    console.error(
      `[Full Stack API] Connection to MongoDB Database has failed. Error: ${e}`
    );
  });

const officer = require("./controllers/officers.js");
app.use("/officer", officer);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`[Full Stack API] Listening on port ${port}`);
});
