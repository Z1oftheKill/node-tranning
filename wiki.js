const express = require('express')
const router = express.Router()

// 首页
router.get('/home', (req, res) => {
  res.send('首页')
})

// 用户页
router.get('/user', (req, res) => {
  res.send('用户页')
})

module.exports = router
