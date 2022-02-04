const express = require('express')
const bodyParser = require('body-parser')
const logger = require('./config/logger')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

require('./app/controllers/index')(app)

const port = process.env.PORT || 3000

app.listen(port, () => {
    logger.log('info',`Server running on Port: ${port}`)
})