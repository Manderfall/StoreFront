const express = require("express");
const router = express.Router();
const middleware = require("../middleware")
const Item = require("../models/cart");

router.get("/cart",middleware.isLoggedIn, (req, res) => {
	res.render("cart");
});

module.exports = router;