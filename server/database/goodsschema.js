
let mongoose = require('./db');

let GoodsSchema = new mongoose.Schema({
	"productId":String,
	"productName":String,
	"salePrice":Number,
	"productImage":String
})


module.exports = GoodsSchema;