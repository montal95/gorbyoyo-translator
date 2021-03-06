const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const keys = require('./config/keys');
const bodyParser = require('body-parser');
const app = express();

//Middleware setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());

//mongoose setup
mongoose.connect(keys.mongoURI);

if (process.env.NODE_ENV === "production") {
  // Express will serve production assets
  //like main.js file
  app.use(express.static("client/build"));

  //Express will serve index.html if route not recognized
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
