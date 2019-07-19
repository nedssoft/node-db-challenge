
const Project = require('../data/helpers/projectModel')
const { ErrorHandler } = require('express-error-bouncer')

const addProjectValidator = (req, res, next) => {
  try {
    if (!Object.keys(req.body).length ) {
      throw new ErrorHandler(400, 'missing the project information')
    } else {
      const { name, description } = req.body
      if (!name || !description) {
        throw new ErrorHandler(400, 'missing project required project field')
      }
    }
    next()
  } catch (error) {
    next(error)
  }
}

async function validateProjectId(req, res, next) {
  try {
    const { id } = req.params;
  if(!id || !Number(id)) {
    throw new ErrorHandler(400, "invalid post id" )
  } else {
    const project = await Project.get(id);
    if (project) {
      req.project = project;
      next()
    } else {
      throw new ErrorHandler(404, "Project with the specified ID does not exist")
    }
  }
  } catch (error) {
    next(error)
  }
};

const addActionValidator = (req, res, next) => {
  try {
    if (!Object.keys(req.body).length ) {
      throw new ErrorHandler(400, 'missing the action information')
    } else {
      const { description } = req.body
      if (!description) {
        throw new ErrorHandler(400, 'missing action required description field')
      }
    }
    next()
  } catch (error) {
    next(error)
  }
}

async function validateActionId(req, res, next) {
 try {
  const { id } = req.params;
  if(!id || !Number(id)) {
    throw new ErrorHandler(400, "invalid Action id" )
  } else {
    const action = await Action.get(id);
    if (action) {
      req.action = action;
      next()
    } else {
      throw new ErrorHandler( 404, "Action with the specified ID does not exist")
    }
  }
 } catch (error) {
   next(error)
 }
};

module.exports = {
  addProjectValidator,
  validateProjectId,
  addActionValidator,
  validateActionId
}