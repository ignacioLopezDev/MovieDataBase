const express = require("express");

// const signInRoute = express.Router();
const signUpRoute = express.Router();

const authController = require("../controllers/auth");


signUpRoute.post("/", authController.signUp);

module.exports =  signUpRoute
