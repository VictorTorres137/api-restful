const express = require('express')
const cors = require('cors')

const routes = require('./routes/routes')
const db = require('./database/db')


const app = express()


//conecção com banco de dados
db.connect()

const allowedOrigins = [
    'http://127.0.0.1:5501',
    "http://outraurl.com.br",
]

// habilita CORS
app.use(cors({
    origin: function(origin, callback) {
        let allowed = true

        console.log(origin)
        console.log(!allowedOrigins.includes(origin))

        //mobile app
        if(!origin) allowed = true

        if(!allowedOrigins.includes(origin)) allowed = false

        console.log(allowed)

        callback(null, allowed)
    }
}))

//habilita server para receber dados em Json
app.use(express.json())


//definindo rotas
app.use('/api', routes)


const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Funfando!! porta:${port}`))
