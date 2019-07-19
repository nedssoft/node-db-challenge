const express = require("express");
const { createNewProject } = require("../controllers");
const { addProjectValidator, validateProjectId } = require("../middleware");
const router = express.Router();

router.post("/projects", addProjectValidator, createNewProject);

module.exports = router;
