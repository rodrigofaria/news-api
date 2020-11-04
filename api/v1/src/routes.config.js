const KoaRouter = require('koa-router')
const postController = require('./controller/post.controller')
const projectController = require('./controller/project.controller')

const router = new KoaRouter({
  prefix: '/api/v1'
})

router.post('/news', projectController.save)
router.post('/news/:uuid', postController.save)
router.get('/news/:uuid', postController.listAll)

module.exports = router