const Student = require("../models/student");
//const mongoose = require("mongoose");

const registerStudent = async (req, res) => {
  if (!req.body.name || !req.body.age || !req.body.sex)
    return res.status(400).send("Incomplete data");

  let existingStudent = await Student.findOne({ name: req.body.name });
  if (existingStudent)
    return res.status(400).send("The student is already registered");

  let student = new Student({
    name: req.body.name,
    sex: req.body.sex,
    age: req.body.age,
    dbStatus: true,
  });

  let result = await student.save();
  if (!result) return res.status(400).send("Failed to register user");
  return res.status(200).send({ result });
};




module.exports = {
  registerStudent,
  
};
