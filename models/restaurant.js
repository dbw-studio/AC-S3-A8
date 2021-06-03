const mongoose = require('mongoose')
const Schema = mongoose.Schema
const restaurantSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  name_en: {
    type: String
  },
  category: {
    type: String,
    required: true
  },
  image: {
    type: String, // 放URL會錯誤
    required: true
  },
  location: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  google_map: {
    type: String, // 放URL會錯誤
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  description: {
    type: String
  }
})
module.exports = mongoose.model('Restaurant', restaurantSchema)