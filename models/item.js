const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/StoreFront');

const itemSchema = new mongoose.Schema({
	title: String,
	brand: String,
	image: String,
	price: String,
	description: String,
	});

const Item =mongoose.model("Item", itemSchema)
module.exports = mongoose.model("Item", itemSchema);