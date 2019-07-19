const express = require("express");
const { createNewProject, createNewAction } = require("../controllers");
const { addProjectValidator, validateProjectId, addActionValidator} = require("../middleware");
const router = express.Router();

router.post("/projects", addProjectValidator, createNewProject);
router.post(
  "/actions/:id/project",
  validateProjectId,
  addActionValidator,
  createNewAction
);
module.exports = router;
