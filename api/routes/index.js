const express = require("express");
const router = express.Router();
const moviesRoutes = require("./movies");
const seriesRoutes = require("./series");
const usersRoutes = require("./users");
const singInroute = require("./signIn");
const signUpRoute= require("./signUp");


router.use("/movies", moviesRoutes);
router.use("/series", seriesRoutes);
router.use("/users", usersRoutes);
router.use("/signup", signUpRoute);
router.use("/login",singInroute );


module.exports = router;
