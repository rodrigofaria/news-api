const Koa = require('koa')
const KoaBody = require('koa-body')
const router = require('./api/v1/src/routes.config')

const app = new Koa()

app.use(KoaBody())
app.use(router.routes())

app.listen(3000, () => console.log('server started on port 3000'))
