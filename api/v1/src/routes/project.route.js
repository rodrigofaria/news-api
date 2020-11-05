const KoaRouter = require('koa-router')
const projectController = require('../controllers/project.controller')

const router = new KoaRouter({
  prefix: '/api/v1'
})

router.post('/news', projectController.save)

module.exports = router