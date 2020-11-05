const { post } = require('../models/index')

const listAll = async ctx => {
  existUUID(ctx)
  return await post.findAll()
    .then(items => {
      ctx.body = items  
    })
}

const save = async ctx => {
  existUUID(ctx).then(exist => {
    console.log(exist)
    if (exist) {
      post.create({
        project_uuid: ctx.params.uuid,
        post: ctx.request.body.post
      }).then(item => {
        ctx.body = item
        ctx.status = 201
      }).catch(err => {
        ctx.body = err
        ctx.status = 500
      })
    } else {
      console.log('rodrigo')
      ctx.status = 404
    }
  })
}
const existUUID = async ctx => {
  return await post.findAll({
    where: {
      project_uuid: ctx.params.uuid
    }
  }).then(item => {
    if (item.length === 0) {
      return false
    }
    return true
  })
}

module.exports = {
  listAll,
  save
}