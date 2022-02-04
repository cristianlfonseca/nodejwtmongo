const { createLogger, transports, format } = require('winston')
require('winston-mongodb')
require('dotenv').config()

module.exports = createLogger({
    transports: [
        // new transports.Console({ Para gerar no console
        new transports.File({
            filename:'info.log',
            level:'info',
            format: format.combine(format.timestamp(), format.json())
        }),
        new transports.MongoDB({
            level: 'error',
            db: process.env.MONGO_DB,
            options: { useUnifiedTopology: true},
            collection: 'AppLogs',
            format: format.combine(format.timestamp(), format.json())
        })
    ]
})