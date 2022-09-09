const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const volleyball = require ("volleyball");

const routes = require("./routes");
const db = require("./db");
const models  = require("./models")

const app = express();

// middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(cookieParser());
app.use(volleyball)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/", routes);
app.get("/", (req, res) => {
  res.send("aplicacion en curso")
})

// error Middleware
app.use((err, req, res, next) => {
  console.log("ERROR");
  console.log(err);
  res.status(500).send(err.message);
});

// port
db.sync({force: false})
.then(()=> console.log("db connected"))
.then(() => {
  app.listen(3000, () => {
  console.log("listen to port 3000");
})})
.catch(console.error)
