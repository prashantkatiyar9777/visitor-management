const express = require("express");
const router = express.Router();
const Visitor = require("../models/Visitor");

// Get all visitors
router.get("/", async (req, res) => {
  try {
    const visitors = await Visitor.find();
    res.json(visitors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new visitor
router.post("/", async (req, res) => {
  const visitor = new Visitor(req.body);
  try {
    const newVisitor = await visitor.save();
    res.status(201).json(newVisitor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a visitor
router.delete("/:id", async (req, res) => {
  try {
    const visitor = await Visitor.findById(req.params.id);
    if (!visitor) {
      return res.status(404).json({ message: "Visitor not found" });
    }
    await visitor.remove();
    res.json({ message: "Visitor removed" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
