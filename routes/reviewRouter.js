const reviewController = require('../controllers/reviewController')

const router = require('express').Router()

//routes for review
router.post('/addreview',reviewController.addReview)
router.get('/getreviews',reviewController.getAllReviews)

module.exports=router