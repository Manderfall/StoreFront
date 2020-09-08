const express = require("express");
const router = express.Router();
const middleware = require("../middleware")



router.get("/account",middleware.isLoggedIn, (req, res) => {
	res.redirect("logout");
});

module.exports = router;