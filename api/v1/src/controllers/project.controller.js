const projectService = require('../services/project.service')

const save = async ctx => {
  return await projectService.save(ctx)
    .then(item => {
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