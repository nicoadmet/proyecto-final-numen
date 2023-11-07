//configuraciones e inicios de URN

const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const app = express()


app.use(express.json()) //envio de objetos a traves de rutas
app.use(logger('dev'))
app.use(cors())

const {connect} = require('./db/connect')


const usersRouter = require('./routers/users')
const mathsRouter = require('./routers/maths')
const listRouter = require('./routers/list')
const apiRouter = require('./routers/api')

app.use('/users', usersRouter) //no funciona //funciona
app.use('/maths', mathsRouter) //no funciona
app.use('/list', listRouter) //no funciona
app.use('/api', apiRouter) //funciona

connect()

module.exports = app