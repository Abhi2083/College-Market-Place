import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
  },
  quantity: {
    type: Number,
    default: 0,
  },
  desc: {
    type: String,
  },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
  },
})

export const Product = mongoose.model('Product', ProductSchema)
