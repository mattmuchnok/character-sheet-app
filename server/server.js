const express = require('express')
const app = express()
const cors = require('cors')
const {SERVER_PORT} = process.env
const ctrl = require('./controller.js')

app.use(express.json())
app.use(cors())



app.listen(SERVER_PORT, () => console.log(`Take us to warp ${SERVER_PORT}!`))