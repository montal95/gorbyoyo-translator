const express = require("express");
const router = express.Router();
db = require("../models");
const axios = require("axios");

router.post("/api/translated", (req, res) => {
  db.Translated.create(req)
  .then(translatedStr => {
    res.json(translatedStr);
  });
});
