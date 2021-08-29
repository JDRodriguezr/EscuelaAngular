const Classes = require("../models/classes");
const Teacher = require("../models/teacher");


const registerTeacher = async (req, res) => {
  if (!req.body.name || !req.body.className || !req.body.sex)
    return res.status(400).send("Incomplete data");

  let classes = await Classes.findOne({className: req.body.className});
  if(!classes) return res.status(400).send("Class not found");

  let existingTeacher = await Teacher.findOne({ name: req.body.name });
  if (existingTeacher)
    return res.status(400).send("The Teacher is already registered");

  let teacher = new Teacher({
    name: req.body.name,
    classes: classes._id,
    sex: req.body.sex,
    dbStatus: true,
  });

  let result = await teacher.save();
  if (!result) return res.status(400).send("Failed to register classroom");
  return res.status(200).send({ result });
};




module.exports = {
  registerTeacher,
  
};