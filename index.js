const Koa = require('koa')
const KoaBody = require('koa-body')
const cors = require('@koa/cors')
const router = require('./api/v1/src/routes.config')

const app = new Koa()

app.use(cors())
app.use(KoaBody())
app.use(router.routes())

app.listen(process.env.PORT || 3000, () => console.log('server started on port 3000'))
