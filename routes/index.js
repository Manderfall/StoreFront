const express = require("express");
const router = express.Router();
const passport = require ("passport");
const localStrategy = require ("passport-local");
const passportLocalMongoose = require ("passport-local-mongoose");
const User = require("../models/user");

/* general */
router.get("/", (req, res) => {
	res.render("home");
});
/* ------------------ */

/* registration */
router.get("/new", (req, res) => {
	res.render("user/new");
});

router.post("/register", (req, res) => {
	var newUser = new User({username: req.body.username});
	User.register(newUser, req.body.password, (err, user) => {
		if(err) {
			if(err.name == "UserExistsError") {
				return res.render("user/new", {"error": "username taken"});
			} else {
				console.log(err);
				return res.render("user/new", {"error": err});
			}
		}
				passport.authenticate("local")(req, res, () => {
			res.redirect("/shop");
		});
		
	});

});
/* ------------------ */

/* login/logout */
router.get("/login", (req, res) => {
	res.render("user/login");
});

router.post("/login", passport.authenticate("local", {
		successRedirect: "/shop",
		failureRedirect: "/login"
	}), (req, res) => {
	// Handled by middleware.
});

router.get("/logout", (req, res) => {
	req.logout(); // Destroys all user data in the session.
    res.redirect("/");
});

function isLoggedIn(req, res, next) {
	if(req.isAuthenticated()) {
		return next();
	}
	res.redirect("/login");
}
/* ------------------ */

module.exports = router;