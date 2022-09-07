const express = require("express");
const router = express.Router();
const moviesRoutes = require("./movies");
const seriesRoutes = require("./series");
const favoriteRoutes = require("./favorites");

router.use("/movies", moviesRoutes);
router.use("/series", seriesRoutes);
router.use("/favorites", favoriteRoutes);

module.exports = router;
