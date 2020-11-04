const { v4: uuid4 } = require('uuid')
const { project } = require('../models/index')

const save = async ctx => {
  const uuid = uuid4()
  
  return await project.create({
    uuid: uuid,
    name: ctx.request.body.projectName
  }).then(item => {
    ctx.body = item
    ctx.status = 201
  }).catch(err => {
    ctx.body = err
    ctx.status = 500
  })
}

module.exports = {
  save,
}