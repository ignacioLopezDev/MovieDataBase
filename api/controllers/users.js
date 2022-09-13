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

// Agregar a favorites
exports.addFavorites = async (req, res) => {
  const { userId } = req.params;
  const { filmId, filmTitle } = req.body;

  // checkeo si ya existe
  const check = await Favorites.findOne({
    where: { filmId: filmId, UserId: userId },
  });

  if (check) return res.status(404).send("Ya se encuentra en favorites");

  // si no existe la linea, la creo en la db
  try {
    const newFavorite = await Favorites.create({ filmId, filmTitle });
    await newFavorite.setUser(userId);
    res.status(201).send("se agrego a favoritos");
  } catch (err) {
    res.status(500).send(err);
  }
};

// remove Favorites
exports.removeFavorites = async (req, res) => {
  const { userId } = req.params;
  const { filmId, filmTitle } = req.body;

  // // check
  const check = await Favorites.findOne({ where: { filmId, filmTitle, UserId: userId } });
  if (!check) return res.status(404).send("no se encuentra en favoritos");

  try {
    await Favorites.destroy({ where: { filmId, filmTitle, UserId: userId } });
    res.status(200).send("La pelicula fue eliminada");
  } catch (err) {
    res.status(500).send(err);
  }
};
