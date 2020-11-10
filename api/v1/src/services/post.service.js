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

const deletePost = async ctx => {
  return await post.findAll({
    where: {
      id: ctx.params.post_id
    }
  }).then(item => {
    item[0].destroy()
    return item[0]
  })
}

const existPostId = async ctx => {
  return await post.findAll({
    where: {
      id: ctx.params.post_id
    }
  }).then(item => {
    return item.length > 0
  })
}

module.exports = {
  listAll,
  save,
  deletePost,
  existPostId
}