let db = require('./db');

let GoodsSchema = require('./goodsschema');

let Goods = db.model('Good',GoodsSchema);

module.exports = Goods;
