//importing models
const db = require('../models')

//create particular model
const Product = db.products
const Review = db.reviews

//1.create product
const addProduct = async(req,res) =>{
    let info = {
        title: req.body.title,
        price : req.body.price,
        description: req.body.description,
        published:req.body.published ? req.body.published : false
    }

    const product = await Product.create(info);
    res.status(200).send(product)
    console.log(product);
}

//2. get all products
const getAllProducts = async(req,res) =>{
    let products = await Product.findAll({
        // attributes: [
        //     'title',
        //     'price'
        // ]
    });
    res.send(products).status(200);
}


//3. get single product
const getOneProduct = async(req,res) =>{
    let id = req.params.id
    let product = await Product.findOne({where : {id : id}})
    res.send(product).status(200)
}

//4. update product using id
const updateProduct = async(req,res) =>{
    let id = req.params.id 
    let product = await Product.update(req.body, {
        where:{
            id:id
        }
    })
    res.send('Product is updated').status(200)
}

//5. delete product using id
const deleteProduct = async(req,res) =>{
    let id = req.params.id 
     await Product.destroy({
        where:{
            id:id
        }
    })
    res.send('Product is deleted').status(200)
}

//6. get all published products
const getPublishedProducts  = async(req,res) =>{
    let products = await Product.findAll({
        where:{
            published:true
        }
    })
    res.send(products).status(200)
}


//7. connnect one to many relationship between product and reviews
const getProductReviews = async (req,res) => {
    const data = await Product.findAll({
        include: [{
            model: Review,
            as : 'review'
        }],
        where:{
            id:1
        }
    })
    console.log(data);
    res.send(data).status(200)
}
//exporting all controllers
module.exports = {
    addProduct,
    getOneProduct,
    getAllProducts,
    updateProduct,
    deleteProduct,
    getPublishedProducts,
    getProductReviews
}