const express = require('express')
//const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

// var corOptions = {
//     origin: 'https/localhost:8801'
// }

//body parser for json files
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//routers
const productRouter = require('./routes/productRouter.js')
app.use('/api/v1/products',productRouter)

const reviewRouter = require('./routes/reviewRouter.js')
app.use('/api/v1/reviews',reviewRouter)


//middlewares
//app.use(cors(corOptions))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//testing
app.get('/',(req,res) => {
    res.json({
        message: "Hello"
    })
})

//port
const port = 3000


app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
})
