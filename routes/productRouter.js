//importing the product controllers
const productController = require('../controllers/productController')

//creating router using Router() function from express 
const router = require('express').Router()

//Routes of product
router.post('/addproduct',productController.addProduct)
router.get('/allproducts',productController.getAllProducts)
router.get('/published',productController.getPublishedProducts)
router.get('/:id',productController.getOneProduct)
router.put('/:id',productController.updateProduct)
router.delete('/:id',productController.deleteProduct)

//Product review route
//router.get('/getproductreviews',productController.getProductReviews)

//exporting router 
module.exports = router