const mongoose = require("mongoose");

const quoteSchema = new mongoose.Schema({
  text: { type: String, required: true },
  category: { type: String, required: true },
  source: { type: String, required: true },
  sourceTitle: { type: String, default: "" }, // Optional field
  createdAt: { type: Date, default: Date.now },
});

const Quote = mongoose.model("Quote", quoteSchema);

module.exports = Quote;