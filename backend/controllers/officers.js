const express = require("express");
const router = express.Router();

const Officer = require("../models/officersModel");

//get all officers
router.get("/", async (req, res) => {
  try {
    let filters = {};
    if (req.query.position) {
      filters.position = req.query.position;
    }
    const officers = await Officer.find(filters);
    return res.json(officers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//post new officer
router.post("/", async (req, res) => {
  const officer = new Officer({
    name: req.body.name,
    position: req.body.position,
    grade: req.body.grade,
  });
  try {
    const newOfficer = await officer.save();
    res.status(201).json(newOfficer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
