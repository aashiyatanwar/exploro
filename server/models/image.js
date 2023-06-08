const mongoose = require("mongoose");

const ImageSchema = mongoose.Schema(
  {
    imageURL: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("image", SongSchema);
