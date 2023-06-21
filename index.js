const express = require('express')
const wiki = require('./wiki.js')
const logger = require('morgan')
const app = express()
app.use('/wiki', wiki)
app.use(logger('dev'))
app.listen(8000, () => {
  console.log('示例程序正在监听 8000 端口！')
})
