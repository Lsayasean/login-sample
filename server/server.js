require('dotenv').config()
const express = require('express')
const massive = require('massive')

const {SERVER_PORT, CONNECTION_STRING} = process.env;

const app = express()

app.use(express.json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
})


app.post('/api/login', async (req ,res) => {
    const {name, pass} = req.body;
    const db = req.app.get('db')
    const [found] = db.find_user(name);

    if(found){
        res.sendStatus(401)
    }
})

app.listen(SERVER_PORT, () => {
    console.log(`we have lift off on dock ${SERVER_PORT}`)
})