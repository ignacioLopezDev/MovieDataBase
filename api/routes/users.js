const express = require("express");
const userRoutes = express.Router();
const userController = require("../controllers/users");

// Mostrar todos los usuarios
userRoutes.get("/showAll", userController.showAll);

// Mostrar los favoritos del usuario
userRoutes.get("/:userId/favorites", userController.favorites);

// add to favorites
userRoutes.post("/:userId/addFavorites", userController.addFavorites)

// delete from favorites
userRoutes.delete("/:userId/removeFavorites", userController.removeFavorites) 

module.exports = userRoutes;



