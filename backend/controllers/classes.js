const Classes = require("../models/classes");
//const mongoose = require("mongoose");

const registerClasses = async (req, res) => {
  if (!req.body.className)
    return res.status(400).send("Incomplete data");

  let existingClasses = await Classes.findOne({ className: req.body.className });
  if (existingClasses)
    return res.status(400).send("The Class is already registered");

  let classes = new Classes({
    className: req.body.className,
    dbStatus: true,
  });

  let result = await classes.save();
  if (!result) return res.status(400).send("Failed to register class");
  return res.status(200).send({ result });
};




module.exports = {
  registerClasses, 
};