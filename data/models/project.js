const db = require('./dbConfig')
const { ErrorHandler } = require('express-error-bouncer');

const getProjectById = id => {
  try {
    const project = db('projects').where({id: id}).first()
    return project
  } catch (error) {
    throw new ErrorHandler(500, error.message)
  }
}
const addProject = (project) => {
  try {
    const newProject = db('projects').insert(project)
    if (!newProject) {
      return null
    }
    return getProjectById(newProject[0])
  } catch (error) {
    throw new ErrorHandler(500, error.message)
  }
}



module.exports = {
  addProject,
  getProjectById
}