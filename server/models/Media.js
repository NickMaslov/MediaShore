const { Schema, model, Types } = require("mongoose");

const schema = new Schema(
  {
    title: {
      type: String,
      required: "title is required"
    },
    description: String,
    genre: String,
    views: { type: Number, default: 0 },
    postedBy: { type: mongoose.ObjectId, ref: "User" }
  },
  {
    timestamps: true
  }
);

module.exports = model("Media", schema);
