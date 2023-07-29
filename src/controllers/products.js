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

    const product = new ProductsModel({
        name,
        brand,
        price,
    })

    product.save()

    res.send({
        message : "Success"
    })

}

async function put(req, res){
    const id = req.params.id

    const product = await ProductsModel.findByIdAndUpdate({_id: id}, req.body, {new: true})

     res.send({
        message: "success",
        product,
    })

    // const product = await ProductsModel.findOne({_id: id})

    // console.log(req.body)

    // await product.updateOne(req.body)

    // res.send({
    //     message: "success",
    //     product,
    // })

}

async function remove(req, res){
    const id = req.params.id

    const remove = await ProductsModel.deleteOne({_id: id})

    console.log(remove)

    const message =  remove.deletedCount ? 'success' : "error"

    res.send({
        message
    })

}


module.exports = {
    get,
    post,
    put,
    remove,
}