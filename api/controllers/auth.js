const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth");

const { User } = require("../models");

// para el login
exports.singIn = (req, res) => {
  let { email, password } = req.body;

  console.log("body:", req.body);

  // busco al usuario
  User.findOne({
    where: {
      email: email,
    },
  })
    .then((user) => {
      // si no lo encuentra
      if (!user) {
        res.status(404).json({ msg: "the user does't exist" });
        //pero si lo encuentra preguntamos su password
      } else {
        if (bcrypt.compareSync(password, user.password)) {
          // si es correcto devolvemos el token
          let token = jwt.sign({ user: user }, authConfig.secret, {
            expiresIn: authConfig.expires,
          });

          res.json({
            user: user,
            token: token,
          });

          // si no lo es es un contraseña incorrecta
        } else {
          res.status(401).json({ msg: "contraseña incorrectao" });
        }
      }
    })

    .catch((err) => {
      res.status(504).json(err);
    });
};

// para el registro
exports.signUp = (req, res) => {
  // se encrypta el password con libreria bcrypt npm i bcrypt
  let password = bcrypt.hashSync(
    req.body.password,
    Number.parseInt(authConfig.saltRounds)
  );

  // se crea el usuario
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: password,
  })
    // luego le pasamos los parametros jwt de token (jwt npm i jsonwebtoken)
    .then((user) => {
      let token = jwt.sign({ user: user }, authConfig.secret, {
        expiresIn: authConfig.expires,
      });
      // luego devolvemos el json
      res.json({
        // user: user,
        username: user.username,
        email: user.email,
        token: token,
      });
    })
    .catch((err) => {
      res.status(505).send(err);
    });
};
