const mongoose = require("mongoose");
const { Schema } = mongoose;

const guideSchema = new Schema(
  {
    title: String,
    image: String,
    content: String,
    tags: [String],
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Guide = mongoose.model("Guide", guideSchema);

module.exports = Guide;
