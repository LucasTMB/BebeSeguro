const mongoose = require('mongoose');

const guideSchema = new mongoose.Schema({
  photo: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Guide = mongoose.model('Guide', guideSchema);

module.exports = Guide;
