const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    content: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true   // auto creates createdAt & updatedAt
  }
);

module.exports = mongoose.model("Note", noteSchema);
