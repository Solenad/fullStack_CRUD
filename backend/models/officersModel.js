const mongoose = require("mongoose");
const { type } = require("os");

const officerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  grade: { type: Number, required: true },
});

const Officer = mongoose.model("Officer", officerSchema);

module.exports = Officer;
