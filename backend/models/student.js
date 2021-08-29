const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  age: {type: Date},
  sex: String,
  date: { type: Date, default: Date.now },
});

const student = mongoose.model("student", studentSchema);
module.exports = student;
