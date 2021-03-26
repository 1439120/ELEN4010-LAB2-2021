// const path = require('path')
const express = require('express')
const app = express()
const mainRouter = require('./mainRouter.js')

app.use(mainRouter)

app.listen(3000)
console.log('Express server running on port 3000')
