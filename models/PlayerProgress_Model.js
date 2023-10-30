const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const playerProgressSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PlayerProgress", playerProgressSchema);
