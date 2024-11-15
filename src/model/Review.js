const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    title: {type: String, required: true},
    author: {type: String , required: true},
    content: {type: String, required: true},
    reviewer: {type: String, required: true},
    rating: {type: Number, min: 1 , max: 5},

}, {timestamps: true})


module.exports = mongoose.model("Review", reviewSchema);