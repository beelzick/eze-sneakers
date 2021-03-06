const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    imgUrl: String,
    description: String,
    tags: [String],
    addDate: Date,
    gender: String,
    rating: Number,
    sizes: [
        {
            size: Number,
            qty: Number,
        }
    ],
})

module.exports = mongoose.models.Product || mongoose.model('Product', ProductSchema)
