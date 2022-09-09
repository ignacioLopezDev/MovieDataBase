const express = require("express");
const signUpRoute = express.Router();

const authController = require("../controllers/auth");

signUpRoute.post("/", authController.signUp);

module.exports = signUpRoute;
