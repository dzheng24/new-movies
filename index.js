require("dotenv").config();
const express = require("express");
const axios = require("axios");

const app = express();

let PORT;
if (process.env.PORT !== undefined) {
  PORT = process.env.PORT;
} else {
  PORT = 3000;
}

// hello

app.get("/movies/:movie", (req, res) => {
  axios
    .get(
      `https://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${req.params.movie}`
    )
    .then((result) => res.json(result.data.Search));
});

app.listen(PORT, () => {
  console.log(`listening`);
});
