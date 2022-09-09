const express = require("express");
const signInRoutes = express.Router();
const {singIn} = require("../controllers/auth")


signInRoutes.post("/", singIn )

module.exports = signInRoutes