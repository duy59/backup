const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    { 
        title: String,
        description: String,
        price: Number,
        discount: Number,
        rating: Number,
        stock: Number,
        status: String,
        categor: String,
        thumbnail: String,
        deleted : Boolean
    });

const Product = mongoose.model('Person', productSchema, 'products');

module.exports = Product