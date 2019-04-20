const express = require('express')
const bodyParser = require('body-parser')
const errorHandler = require( './errorHandler.middleware')

const todoRoutes = require('./api/todo/todo.routes')
const dbService = require('./dbService')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

dbService
    .connect()
    .catch(e => {
        console.log('##########################################')
        console.log('error connecting: ', e)
        console.log('##########################################')
    })

// routes
app.use('/todos', todoRoutes)
app.use(errorHandler)

const PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log('Server listening on port: ' + PORT)