const { v4: uuid4 } = require('uuid')
const database = require('../db/postgre.service')

const createUserUUID = async ctx => {
  const uuid = uuid4()

  await database.query('insert into project(uuid, name) values ($1, $2)', [uuid, ctx.request.body.projectName])
  .then(() => {
    ctx.body = {
      projectName: ctx.request.body.projectName,
      uuid: uuid
    }
    ctx.status = 201

  }).catch(error => {
    ctx.body = error
    ctx.status = 500
  })
}

const saveNews = async ctx => {
  const { rows } = await database.query('select uuid from project where uuid = $1', [ctx.params.uuid])
  if (rows.length === 0) {
    ctx.throw(404)
  }

  await database.query('insert into posts(project_uuid, post) values ($1, $2)', [ctx.params.uuid, ctx.request.body.post])
  .then(() => {
    ctx.body = {
      post: ctx.request.body.post
    }
    ctx.status = 201

  }).catch(error => {
    ctx.body = error
    ctx.status = 500
  })
}

const listNews = ctx => {
  ctx.body = 'List news'
}

module.exports = {
  createUserUUID,
  saveNews,
  listNews,
}