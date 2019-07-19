const db = require('./dbConfig')
const { ErrorHandler } = require('express-error-bouncer');

const getProjectById = async id => {
  try {
    const project = await db('projects').where({id: id}).first();
    if (project) {
      const actions = await db('actions').where({project_id : project.id}).select('description', 'notes', 'completed');
      const collections = {...project, actions }
      return collections
    }
    return null
  } catch (error) {
    throw new ErrorHandler(500, error.message)
  }
}
const addProject = async (project) => {
  try {
    const newProject = await db('projects').insert(project)
    if (!newProject) {
      return null
    }
    return await getProjectById(newProject[0])
  } catch (error) {
    throw new ErrorHandler(500, error.message)
  }
}



module.exports = {
  addProject,
  getProjectById
}