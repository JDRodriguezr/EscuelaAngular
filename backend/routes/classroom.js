const express = require("express");
const router = express.Router();
const ClassroomController = require("../controllers/classroom")


router.post("/registerClassroom", ClassroomController.registerClassroom);

module.exports = router;