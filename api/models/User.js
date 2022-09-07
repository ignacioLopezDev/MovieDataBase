const S = require("sequelize");
const db = require("../db");

class User extends S.Model {}

User.init(
  {
    username: {
      type: S.STRING,
      allowNull: false,
    },
    email: {
      type: S.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    },{
      timestamps:false, sequelize:db, modelName:"User"
    }
);

module.exports = User