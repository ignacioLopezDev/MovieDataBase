const S = require("sequelize");
const db = require("../db");

class Favorites extends S.Model {}

Favorites.init({
  filmId: {
    type: S.INTEGER
  },
  filmTitle:{
    type:S.INTEGER
  }
},{
  timestamps:false, sequelize: db, modelname: "Favorites"
});

module.exports = Favorites
