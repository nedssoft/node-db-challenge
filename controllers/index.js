const { ErrorHandler } = require('express-error-bouncer')
const Project = require('../data/models/project')
const createNewProject = async (req, res, next) => {
  try {
    const project = await Project.addProject(req.body);
    if(project) {
      return res.status(201).json({
        status: 'OK',
        project
      })
    } else {
      throw new ErrorHandler(500, 'Error occurred trying to save project')
    }
  } catch (error) {
    next(error)
  }
}



module.exports = {
  createNewProject
}