const { post } = require('../models/index')

const listAll = async ctx => {
  return await post.findAll({
    where: {
      project_uuid: ctx.params.uuid
    }
  }).then(items => {
    return items
  })
}

const save = async ctx => {
  return await post.create({
    project_uuid: ctx.params.uuid,
    post: ctx.request.body.post
  }).then(item => {
    return item
  }).catch(err => {
    ctx.throw(500, err.message)
  })
}

module.exports = {
  listAll,
  save
}