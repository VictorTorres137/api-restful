const express = require('express')
// const path = require('path')

const routes = require('./routes/routes')
const db = require('./database/db')
const internal = require('stream')

const app = express()

//conecção com banco de dados
db.connect()

//habilita server para receber dados em Json
app.use(express.json())


//definindo rotas
app.use('/api', routes)


const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Funfando!! porta:${port}`))
