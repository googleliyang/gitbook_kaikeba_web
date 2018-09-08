const express = require('express')
const {userRouter: routers, proRouter }= require('./routers/index')
const app = express()

console.log('the express obj is', express)

app.use(routers)
app.use(proRouter)

app.use(express.static('public'))
app.listen(1234, err => {
  if(err) return new Error('start error')
  console.log('server start successs')
})
