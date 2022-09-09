const express = require("express");
const router = express.Router();
const moviesRoutes = require("./movies");
const seriesRoutes = require("./series");
const favoriteRoutes = require("./favorites");
const singInroute = require("./signIn");
const signUpRoute= require("./signUp");


router.use("/movies", moviesRoutes);
router.use("/series", seriesRoutes);
router.use("/favorites", favoriteRoutes);
router.use("/signup", signUpRoute);
router.use("/login",singInroute );


module.exports = router;
