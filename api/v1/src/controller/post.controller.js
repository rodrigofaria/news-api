const { post } = require('../models/index')

const listAll = async ctx => {
  existUUID(ctx)
  return await post.findAll()
    .then(items => {
      ctx.body = items  
    })
}

const save = async ctx => {
  existUUID(ctx)

  return await post.create({
    project_uuid: ctx.params.uuid,
    post: ctx.request.body.post
  }).then(item => {
    ctx.body = item
    ctx.status = 201
  }).catch(err => {
    ctx.body = err
    ctx.status = 500
  })
}
const existUUID = async ctx => {
  return await post.findAll({
    attributes: ['project_uuid']
  }).then(item => {
    if (item.length === 0) {
      ctx.throw(404)
    }
  })
}

module.exports = {
  listAll,
  save
}