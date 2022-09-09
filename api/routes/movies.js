const express = require("express");
const movies = express.Router();

// Llamado a la API externa
const moviesController = require("../controllers/movies");

// Grid de Movies
movies.get("/", moviesController.movies);

// Llamado a Movie en particular por su id
movies.get("/:id", moviesController.movieId)


module.exports = movies;
