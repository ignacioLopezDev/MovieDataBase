const express = require("express");
const userRoutes = express.Router();
const userController = require("../controllers/users");

// Mostrar todos los usuarios
userRoutes.get("/showAll", userController.showAll);

// Mostrar los favoritos del usuario
userRoutes.get("/:userId/favorites", userController.favorites);

module.exports = userRoutes;
