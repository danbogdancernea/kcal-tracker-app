const mongoose = require('mongoose');

const Product = mongoose.model(
    "Product",
    new mongoose.Schema({
        name: {type: String, required: true},
        weight: {type: Number, required: true},
        kcal: {type: Number, required: true},
        protein: {type: Number, required: true},
        fats: {type: Number, required: true},
        carbs: {type: Number, required: true}
    })
);

module.exports = Product;