const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./db/db");
const Student = require("./routes/student");
const Classroom = require("./routes/classroom");
const Classes = require("./routes/classes");
const Teacher = require("./routes/teacher");
require("dotenv").config();


const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/student", Student);
app.use("/api/classroom", Classroom);
app.use("/api/classes", Classes);
app.use("/api/teacher", Teacher);

app.listen(process.env.PORT, () =>
  console.log("Backend server running on port: " + process.env.PORT)
);

dbConnection();
