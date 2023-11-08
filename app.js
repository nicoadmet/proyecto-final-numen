//configuraciones e inicios de URN

const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const app = express()


app.use(express.json()) //envio de objetos a traves de rutas
app.use(logger('dev'))
app.use(cors())

const {connect} = require('./db/connect')


const apiRouter = require('./routers/api')


app.use('/api', apiRouter) //funciona

connect()

module.exports = app