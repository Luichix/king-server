// const config = require('./utils/config')
const express = require('express')
require('express-async-errors')
const app = express()
const cors = require('cors')
const logger = require('./utils/logger')

logger.info('connecting to')

app.use(cors())


module.exports = app

