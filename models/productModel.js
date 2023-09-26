const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A product must have a price'],
    unique: true,
    trim: true,
  },
  price: {
    type: Number,
    required: [true, 'A product must have a price'],
  },
  imageCover: {
    type: String,
    required: [true, 'A product must have a cover image'],
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
