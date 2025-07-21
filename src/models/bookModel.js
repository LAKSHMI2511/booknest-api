
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'A book must have a title'],
      trim: true,
    },
    author: {
      type: String,
      required: [true, 'A book must have an author'],
      trim: true,
    },
    genre: {
      type: String,
      trim: true,
    },
    publishYear: {
      type: Number,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Book must belong to a user'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Book', bookSchema);
