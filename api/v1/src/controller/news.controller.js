const { v4: uuid4 } = require('uuid')
const database = require('../db/postgre.service')

const createUserUUID = async ctx => {
  const uuid = await getUUID()

  if (!uuid) {
    ctx.body = 'Failured to generate the UUID. Please, try again.'
    ctx.status = 508
    return
  }

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

const saveNews = ctx => {
  ctx.body = 'Save new message'
}

const listNews = ctx => {
  ctx.body = 'List news'
}

const getUUID = async () => {
  const maxAttempts = 10
  for (let i = 0; i < maxAttempts; i++) {
    const uuid = uuid4()
    const { rows } = await database.query('select * from project where uuid = $1::text', [uuid])

    if (rows.length === 0) {
      return uuid
    }
  }
}

module.exports = {
  createUserUUID,
  saveNews,
  listNews,
}