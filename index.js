const Koa = require('koa')
const app = new Koa()
const path = require('path')
const static = require('koa-static')

app.use(static(path.join(__dirname, '../public')))
app.listen(9003, () => {
  console.log('listen at port 9003...')
})