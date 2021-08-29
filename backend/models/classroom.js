const mongoose = require("mongoose");

const classroomSchema = new mongoose.Schema({
  classroomCode: String,
  slots: Number,
  teacherId: { type: mongoose.Schema.ObjectId, ref: "teacher" },
  date: { type: Date, default: Date.now },
});

const classroom = mongoose.model("classroom", classroomSchema);
module.exports = classroom;
