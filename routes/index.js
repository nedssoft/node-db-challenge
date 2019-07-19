const express = require("express");
const { createNewProject, createNewAction, getProjectById } = require("../controllers");
const { addProjectValidator, validateProjectId, addActionValidator} = require("../middleware");
const router = express.Router();

router.post("/projects", addProjectValidator, createNewProject);
router.get("/projects/:id", validateProjectId, getProjectById);
router.post(
  "/actions/:id/project",
  validateProjectId,
  addActionValidator,
  createNewAction
);
module.exports = router;
