var mongoose = require('mongoose');

var foodSchema = new mongoose.Schema({
  name: { type: String },
  weight: { type: Number },
  measure:{ type: String },
  nutrients: [{}]
});

module.exports = mongoose.model('Food', foodSchema);
