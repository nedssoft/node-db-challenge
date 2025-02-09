const { ErrorHandler } = require('express-error-bouncer')
const Project = require('../data/models/project')
const Action = require('../data/models/action')

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
    if (!error.statusCode) {
      error.statusCode = 500
    }
    next(error)
  }
}

const createNewAction = async (req, res, next) => {
  try {
    req.body.project_id = req.project.id;
    const action = await Action.addAction(req.body);
    if(action) {
      return res.status(201).json({
        status: 'OK',
        action
      })
    } else {
      throw new ErrorHandler(500, 'Error occurred trying to save action')
    }
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500
    }
    next(error)
  }
}

const getProjectById = async (req, res, next) => {
  try {
    
    if (!req.project) {
      throw new ErrorHandler(500, 'Project with the specified ID does not exist')
    }
    return res.status(200).json({ message: 'OK', project: req.project})
  } catch (error) {
    next(error)
  }
}

const updateProject = async (req, res, next) => {
  try {
    const project = await Project.updateProject(req.project.id, req.body)
    if (project) {
      return res.status(200).json({ message: 'Project updated', project})
    }
    throw new ErrorHandler(500, 'Could not update project')
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500
    }
    next(error)
  }
}
const deleteProject = async (req, res, next) => {
  try {
    const deleted = await Project.deleteProject(req.project.id)
    if ( deleted) {
      return res.status(200).json({ message: 'Project deleted'})
    }
    throw new ErrorHandler(500, 'Could not delete project')
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500
    }
    next(error)
  }
}

module.exports = {
  createNewProject,
  createNewAction,
  getProjectById,
  updateProject,
  deleteProject
}