const axios = require("axios");

const tmdb = "https://api.themoviedb.org/3/";
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzg0ZGQ0OGYyYjA1Mzk1OTZiNGEwZGQwNGQ2ODg5MSIsInN1YiI6IjYyOTIzYjY4ZGY4NmE4NzYyNjA0MzY2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R0Sb73FHKkXok5leGBSL_qQkJdO_sO6VhdaKv0P0eXI";
const api_key = "api_key=a784dd48f2b0539596b4a0dd04d68891";
const contentType = "application/json;charset=utf-8";

// llamado a todas las series
exports.series = (req, res) => {
  axios
    .get(`${tmdb}discover/tv?${token}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": contentType,
      },
    })
    .then((series) => {
      res.status(200).send(series.data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
