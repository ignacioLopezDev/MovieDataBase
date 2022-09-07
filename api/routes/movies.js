const express = require("express");
const movies = express.Router();

const moviesController = require("../controllers/movies");

movies.get("/", moviesController.movies);

module.exports = movies;
