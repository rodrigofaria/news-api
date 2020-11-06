const postService = require('../services/post.service')
const projectService = require('../services/project.service')

const listAll = async ctx => {
  const exist = await projectService.existUUID(ctx)
  if (!exist) {
    ctx.throw(404, 'invalid uuid');
  }

  return await postService.listAll(ctx).then(items => {
    ctx.body = items
  }).catch(err => {
    ctx.body = err
    ctx.status = 500
  })
}

const save = async ctx => {
  const exist = await projectService.existUUID(ctx)
  if (!exist) {
    ctx.throw(404, 'invalid uuid');
  }

  return await postService.save(ctx)
    .then(item => {
      ctx.body = item
      ctx.status = 201
    }).catch(err => {
      ctx.body = err
      ctx.status = 500
    })
}

module.exports = {
  listAll,
  save
}