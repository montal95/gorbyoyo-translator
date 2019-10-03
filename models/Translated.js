const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TranslatedSchema = new Schema({
  english: { type: String, required: true, unique: true },
  dorbdorb: { type: String, required: true },
  gorbyoyo: { type: String, required: true }
});

let Translated = mongoose.model("Translated", TranslatedSchema);

module.exports = Translated;