const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const usersRouter = require('./routes/users/users.router')

const PORT = 3000
const HOST = '0.0.0.0'

const app = express()

const corsOptions = {
  origin: 'http://localhost:9000',
}

const log = (req, res, next) => {
  console.log('log - request host:', req.headers.host)
  next()
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors(corsOptions))

app.use('/', log, usersRouter)

app.listen(PORT, HOST, () => {
  console.log(`app running in: ${HOST}:${PORT}`)
})

module.exports = app
