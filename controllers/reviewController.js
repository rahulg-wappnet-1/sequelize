//importing db models
const db = require('../models')

//model
const Review = db.reviews

//1. Add review
const addReview = async(req,res) =>{
    let data = {
        rating: req.body.rating,
        description: req.body.description
    }

    const review = await Review.create(data)
    res.send(review).status(200)
}

//2.Get all reviews
const getAllReviews = async(req,res) =>{
    let reviews =await Review.findAll({
        "attributes":['id','rating','description']
    })
    res.send(reviews).status(200)
}

//3.
module.exports = {
    addReview,
    getAllReviews
}