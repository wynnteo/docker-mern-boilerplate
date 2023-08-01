require("dotenv").config({
  path: `./.env.${process.env.NODE_ENV}`,
});
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
require("./config/db-connection");
const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

// disable 'X-Powered-By' header in response
app.disable("x-powered-by");
app.get('/api/welcome', function (req, res) {
    res.send("Welcome to my page.");
})

// default case for unmatched routes
app.use(function (req, res) {
  res.status(404);
});

const port = process.env.SERVER_PORT || 4000;

app.listen(port, () => {
  console.log(`\nServer Started on ${port}`);
});