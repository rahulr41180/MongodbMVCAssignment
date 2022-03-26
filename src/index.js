
const express = require("express");

const UserController = require("./controllers/user.controller");

const StudentController = require("./controllers/student.controller");

const BatchController = require("./controllers/batch.controller");

// const InstructorController = require("./controllers/instructor.controller");

const EvaluationController = require("./controllers/evaluation.controller");

const SubmissionController = require("./controllers/submission.controller");

const ResultController = require("./controllers/result.controller");

const app = express();

app.use(express.json());

app.use("/users", UserController);

app.use("/students",StudentController);

app.use("/batches", BatchController);

app.use("/evaluations", EvaluationController);

app.use("/submission", SubmissionController);

app.use("/results", ResultController);

module.exports = app;