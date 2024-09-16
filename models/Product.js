const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  isPublished: { type: Boolean, default: false }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
