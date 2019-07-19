const db = require('./dbConfig')
const { ErrorHandler } = require('express-error-bouncer');

const getActionById = async id => {
  try {
    const action = await db('actions').where({id: id}).first()
    return action
  } catch (error) {
    throw new ErrorHandler(500, error.message)
  }
}
const addAction = async (action) => {
  try {
    const newAction = await db('actions').insert(action)
    if (!newAction) {
      return null
    }
    const createdAction = await getActionById(newAction[0])
    return createdAction
  } catch (error) {
    throw new ErrorHandler(500, error.message)
  }
}



module.exports = {
  addAction,
  getActionById
}