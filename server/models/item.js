const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: false
  },
  price: {
    type: Number,
    required: false
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  }
});

module.exports = mongoose.model('Item', itemSchema);
