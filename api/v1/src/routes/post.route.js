const KoaRouter = require('koa-router')
const postController = require('../controllers/post.controller.js')

const router = new KoaRouter({
  prefix: '/api/v1'
})

router.post('/news/:uuid', postController.save)
router.get('/news/:uuid', postController.listAll)

module.exports = router