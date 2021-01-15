const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const productSchema = mongoose.Schema({
  photoGallery: { type: Array, required: true },
  productNumber: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  rating: { type: Number, required: true },
  ratingCount: { type: Number, required: true },
  price: { type: Number, required: true },
  color: { type: String, required: true },
  description: { type: String, required: true },
  features: { type: Array, required: true },
  technicalSpecs: {
    bestUse: { type: String, required: true },
    materials: { type: String, required: true },
    dimensions: { type: Array, required: true },
    weight: { type: Array, required: true },
  },
});

productSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Product', productSchema);
