const express = require("express");
const favoriteRoutes = express.Router();
const { Favorites } = require("../models");

favoriteRoutes.get("/", (req, res, next) => {
  Favorites.findAll()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

module.exports = favoriteRoutes;
