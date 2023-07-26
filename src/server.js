const express = require('express')
// const path = require('path')

const routes = require('./routes/routes')
// const db = require('./database')
const internal = require('stream')

const app = express()



//conecção com banco de dados
// db.conect()


//definindo template engine

//habilita server para receber dados via post (Formulário)
app.use(express.urlencoded({ extended: true}))


//definindo rotas
app.use('/api', routes)


const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Funfando!! porta:${port}`))
