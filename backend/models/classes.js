const mongoose = require("mongoose");

const classesSchema = new mongoose.Schema({
  className: String,
  date: { type: Date, default: Date.now },
});

const classes = mongoose.model("classes", classesSchema);
module.exports = classes;
