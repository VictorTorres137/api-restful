const mongoose = require('mongoose')


function connect(){
// mongoose.set('useNewUrlParser', true)
    
    mongoose.connect('mongodb://127.0.0.1:27017/api-restful')
    
    const db = mongoose.connection
    
    db.once('open', () => {
        console.log('Conected to database')
    })
    
    db.on('error', console.error.bind(console,'conection error:'))

    }

    module.exports = {
        connect
    }