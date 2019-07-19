const express = require("express");
const { createNewProject, createNewAction, getProjectById , updateProject} = require("../controllers");
const { addProjectValidator, validateProjectId, addActionValidator} = require("../middleware");
const router = express.Router();

router.post("/projects", addProjectValidator, createNewProject);
router.get("/projects/:id", validateProjectId, getProjectById);
router.put("/projects/:id", validateProjectId, addProjectValidator, updateProject  );
router.post(
  "/actions/:id/project",
  validateProjectId,
  addActionValidator,
  createNewAction
);
module.exports = router;
