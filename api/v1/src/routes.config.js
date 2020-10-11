const KoaRouter = require('koa-router')
const controller = require('./controller/news.controller')

const router = new KoaRouter({
  prefix: '/api/v1'
})

router.get('/news/:uuid', controller.listNews)
router.post('/news', controller.createUserUUID)
router.post('/news/:uuid', controller.saveNews)

module.exports = router