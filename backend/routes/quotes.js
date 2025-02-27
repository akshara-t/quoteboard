const express = require("express");
const router = express.Router();
const Quote = require("../models/Quote");

// @route   GET /api/quotes
// @desc    Get all quotes
router.get("/", async (req, res) => {
  try {
    const quotes = await Quote.find();
    res.json(quotes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// @route   POST /api/quotes
// @desc    Add a new quote
router.post("/", async (req, res) => {
  const { text, source, category, sourceTitle } = req.body;
  try {
    const newQuote = new Quote({ text, source, category, sourceTitle });
    await newQuote.save();
    res.status(201).json(newQuote);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;