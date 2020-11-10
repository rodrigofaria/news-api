const { v4: uuid4 } = require('uuid')
const { project } = require('../models/index')

const save = async ctx => {
  const uuid = uuid4()
  
  return await project.create({
    uuid: uuid,
    name: ctx.request.body.projectName
  }).then(item => {
    return item
  }).catch(err => {
    ctx.throw(500, err.message)
  })
}

const existUUID = async ctx => {
  return await project.findAll({
    where: {
      uuid: ctx.params.uuid
    }
  }).then(item => {
    return item.length > 0
  })
}

module.exports = {
  existUUID,
  save,
}