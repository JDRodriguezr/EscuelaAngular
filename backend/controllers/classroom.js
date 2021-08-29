const Classroom = require("../models/classroom");
const Teacher = require("../models/teacher");


const registerClassroom = async (req, res) => {
  if (!req.body.classroomCode || !req.body.slots || !req.body.name)
    return res.status(400).send("Incomplete data");

  let teacher = await Teacher.findOne({name: req.body.name});
  if(!teacher) return res.status(400).send("Teacher not found");

  let existingClassroom = await Classroom.findOne({ classroomCode: req.body.classroomCode });
  if (existingClassroom)
    return res.status(400).send("The classroom is already registered");

  let classroom = new Classroom({
    classroomCode: req.body.classroomCode,
    slots: req.body.slots,
    teacherId: teacher._id,
    dbStatus: true,
  });

  let result = await classroom.save();
  if (!result) return res.status(400).send("Failed to register classroom");
  return res.status(200).send({ result });
};




module.exports = {
  registerClassroom,
  
};