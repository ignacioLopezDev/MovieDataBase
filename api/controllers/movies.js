const axios = require("axios");

const tmdb = "https://api.themoviedb.org/3/";
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzg0ZGQ0OGYyYjA1Mzk1OTZiNGEwZGQwNGQ2ODg5MSIsInN1YiI6IjYyOTIzYjY4ZGY4NmE4NzYyNjA0MzY2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R0Sb73FHKkXok5leGBSL_qQkJdO_sO6VhdaKv0P0eXI";
const api_key = "api_key=a784dd48f2b0539596b4a0dd04d68891";
const contentType = "application/json;charset=utf-8";

// llamado a todas las movies
exports.movies = (req, res) => {
  axios
    .get(`${tmdb}discover/movie?${api_key}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": contentType,
      },
    })
    .then((movieData) => {
      res.status(200).send(movieData.data.results);
      // res.status(200).send(movieData.data.results.map((result)=>result.title));
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

// llamado a una movie en particular por su id
exports.movieId = (req, res) => {
  const { id } = req.params;
  axios
    .get(`${tmdb}/movie/${id}?${api_key}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": contentType,
      },
    })
    .then((movie) => {
      res.status(200).send(movie.data.title);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

exports.movieSearch = (req, res) => {
  const { search } = req.params;

  axios
    .get(
      `${tmdb}/search/movie?${api_key}&language=en-US&query=${search}&page=1&include_adult=true`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": contentType,
        },
      }
    )
    .then((search) => {
      res.status(200).send(search.data.results.map((x)=> x.title));
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
