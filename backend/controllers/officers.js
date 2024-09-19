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

// update officer
router.put("/", async (req, res) => {
  
  try {
    const {id} = req.params;
    const officer = await officer.findByIdAndUpdate(id, req.body);

    if (!officer) {
      return res.status(404).json({ message: "Officer not found."} )
    }

    const updatedOfficer = await officer.findById(id);
    res.status(201).json(updatedQuestion);
  } catch (err) {
    res.status(500).json({message: error.message});
  }
});

// delete officer
router.delete("/", async (req, res) => {

  try {
    const { id } = req.params;
    const officer = officer.findByIdAndDelete(id);
    
    // checks if question exists
    if (!officer) {
        return res.status(404).json({message: "Officer not found."});
    }

    res.status(200).json({message: "Officer deleted."});
  } catch(error) {
      res.status(500).json( { message: error.message } );
  }
});


module.exports = router;
