const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  name: String,
  classes: { type: mongoose.Schema.ObjectId, ref: "classes" },
  sex: String,
  date: { type: Date, default: Date.now },
});

const teacher = mongoose.model("teacher", teacherSchema);
module.exports = teacher;
