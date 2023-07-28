const router = require('express').Router()
const ProductController = require('../controllers/products')
// Verbos HTTP
// GET = Obter dados
// POST = Envias/Receber dados
// PUT = Atualizar dados
// DELETE = Remover dados

router.get('/products/:id?', ProductController.get)
// router.post('/products', ProductController.post)
// router.put('/products', ProductController.put)
// router.delete('/products', ProductController.delete)



module.exports = router