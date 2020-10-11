const createUserUUID = ctx => {
  ctx.body = 'UUID'
}

const saveNews = ctx => {
  ctx.body = 'Save new message'
}

const listNews = ctx => {
  ctx.body = 'List news'
}

module.exports = {
  createUserUUID,
  saveNews,
  listNews,
}