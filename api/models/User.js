const S = require("sequelize");
const db = require("../db");

class User extends S.Model {}

User.init(
  {
    username: {
      type: S.STRING,
      unique: true,
      allowNull: false,
      validate:{
        isAlpha:{
          msg:"Solo letras",
        },
        len:{
          args:[2,50],
          msg:"minimo de 2 caracteres"
        }
      }
    },
    email: {
      type: S.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password:{
      type: S.STRING,
      allowNull:false,
      validate:{
      }
    }
    },{
      timestamps:false, sequelize:db, modelName:"User"
    }
);

module.exports = User