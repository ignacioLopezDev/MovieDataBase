const express = require("express")
const series = express.Router()

const seriesController = require("../controllers/series")

// Grid de Series
series.get("/", seriesController.series);

// Llamado a Series en particular por su id
series.get("/:id", seriesController.seriesId);

// Busqueda de una Serie
series.get("/search/:search", seriesController.seriesSearch);

module.exports = series


