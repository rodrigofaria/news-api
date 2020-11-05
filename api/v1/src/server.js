const Koa = require('koa')
const KoaBody = require('koa-body')
const cors = require('@koa/cors')
const postRouter = require('./routes/post.route.js')
const projectRouter = require('./routes/project.route.js')

const app = new Koa()

app.use(cors())
app.use(KoaBody())
app.use(postRouter.routes())
app.use(projectRouter.routes())

app.listen(process.env.PORT || 3000, () => console.log('server started on port 3000'))
