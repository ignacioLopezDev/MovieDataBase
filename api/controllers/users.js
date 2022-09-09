const { User, Favorites } = require("../models/");

// Mostrar todos los usuarios
exports.showAll = (req, res) => {
  User.findAll({
    attributes: {
      exclude: ["id", "email", "password"],
    },
  })
    .then((result) => {
      res.status(200).send(result.map((x) => x.username));
    })
    .catch((err) => {
      res.status(505).send(err);
    });
};

// Mostrar los favoritos del usuario
exports.favorites = (req, res) => {
  const { userId } = req.params;

  Favorites.findAll({
    where: {
      UserId: userId,
    },
  })
    .then((results) => {
      res.status(200).send(results);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};


