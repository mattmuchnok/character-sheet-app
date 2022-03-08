const express = require('express')
const app = express()
const cors = require('cors')
const ctrl = require('./controller.js')
const path = require('path')

require('dotenv').config()
const {SERVER_PORT} = process.env

app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname, './public')))

// Endpoints:
app.post('/character', ctrl.createCharacter)
app.get('/character/:id', ctrl.retrieveCharacter)

app.listen(SERVER_PORT, () => console.log(`Take us to warp ${SERVER_PORT}!`))