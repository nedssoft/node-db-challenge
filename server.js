const express = require('express')
const { bouncer } = require('express-error-bouncer')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello API')
})

app.use(bouncer)
module.exports = app