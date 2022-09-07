const express = require("express")
const series = express.Router()

const seriesController = require("../controllers/series")

series.get("/", seriesController.series)

module.exports = series