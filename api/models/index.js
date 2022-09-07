const User = require("./User");
const Favorites = require("./Favorites");

// Inner Join User.ID = Favorites.User_id
User.hasMany(Favorites,{foreignKey: "UserId"});
Favorites.belongsTo(User)

module.exports = {User, Favorites}