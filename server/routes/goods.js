let express = require('express');

let router = express.Router();

let Goods = require('../database/goodsmodel');

router.get('/',(req,res,next)=>{
	
	Goods.find({},(err,data)=>{
		console.log(data)
		if(err){
			res.send('Error:' + err)
		} else{
			res.send(data)
		}
	})
})

module.exports = router;




