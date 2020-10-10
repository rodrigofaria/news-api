const Koa = require('koa')

const app = new Koa()

app.listen(3000, () => console.log('server started on port 3000'))
