require('dotenv').config()
const express = require('express')
const massive = require('massive')

const {SERVER_PORT, CONNECTION_STRING} = process.env;

const app = express()

app.use(express.json())



app.listen(SERVER_PORT, () => {
    console.log(`we have lift off on dock ${SERVER_PORT}`)
})