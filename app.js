'use strict'
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const router = require('./routes/nroutes')

app.use('/', router.routes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})