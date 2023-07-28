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

async function post(req, res){
    const {
        name,
        brand,
        price,
    } = req.body

    console.log(req.body)

    const product = new ProductsModel({
        name,
        brand,
        price,
    })

    product.save()

    res.send({
        message : "Sucess"
    })

}


module.exports = {
    get,
    post,
}