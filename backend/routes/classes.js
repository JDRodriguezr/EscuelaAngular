const express = require("express");
const router = express.Router();
const ClassesController = require("../controllers/classes")


router.post("/registerClasses", ClassesController.registerClasses);

module.exports = router;