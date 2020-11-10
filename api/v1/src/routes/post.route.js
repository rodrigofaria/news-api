const KoaRouter = require('koa-router')
const postController = require('../controllers/post.controller.js')

const router = new KoaRouter({
  prefix: '/api/v1'
})

router.post('/news/:uuid', postController.save)
router.get('/news/:uuid', postController.listAll)
router.delete('/news/:uuid/:post_id', postController.deletePost)

module.exports = router