const db = require('./dbConfig')
const { ErrorHandler } = require('express-error-bouncer');

const addProject = (project) => {
  try {
    const newProject = db('projects').insert(project)
    if (!newProject) {
      return null
    }
    return newProject
  } catch (error) {
    throw new ErrorHandler(500, error.message)
  }
}

module.exports = {
  addProject,
}