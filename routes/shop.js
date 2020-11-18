const express = require("express");
const router = express.Router();
const Item = require("../models/item");
// const middleware = require("../middleware")

/* items */
router.get("/shop",function (req,res){
	Item.find({}, function(err, allitems){
		if(err){
			console.log(err);
		}else{
			res.render("shop",{Item:allitems})
		}
	});
});

module.exports = router;

/* The middleware is removed here due to passport/heroku */