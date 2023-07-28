const ProductsModel = require('../models/products')

async function get(req, res){

    //query string ?id no final da URL = query
    //Quando vem no post = body

    const id = req.params.id

    const obj = id ? {_id: id} : null

    // let obj = {}

    // if (id) {
    //     obj._id = id
    // }

    const products = await ProductsModel.find(obj)

    res.send(products)
}

module.exports = {
    get,
}