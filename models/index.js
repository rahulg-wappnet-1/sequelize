const dbCOnfig = require('../config/dbConfig')

const {Sequelize, DataTypes} = require('sequelize')
const dbConfig = require('../config/dbConfig')
const { DB } = require('../config/dbConfig')

const sequelize = new Sequelize(
    dbCOnfig.DB,
    dbCOnfig.USER,
    dbCOnfig.PASSWORD,{
        host:dbCOnfig.HOST,
        dialect:dbCOnfig.dialect,
        //operatorsAliases:false,
        logging: dbCOnfig.logging, //prevent display of query execution on console
        
        pool:{
            max:dbConfig.pool.max,
            min:dbCOnfig.pool.min,
            acquire:dbCOnfig.pool.acquire,
            idle:dbConfig.pool.idle
        }
    }  
)

sequelize.authenticate()
    .then(() =>{
        console.log('connected with sequelize');
    })
    .catch((err) =>{
        console.log(err);
    })


const db = {}

db.sequelize = sequelize
db.Sequelize = Sequelize

db.products = require('./productModel')(sequelize,DataTypes)
db.reviews = require('./reviewModel')(sequelize,DataTypes)

db.sequelize.sync({force:false})
    .then(() =>{
        console.log('Yes re-sync done');
    })
    

//creating realation between product and review tables/models
db.products.hasMany(db.reviews,{
    foreignKey: 'product_id',
    as: 'review'
})    

db.reviews.belongsTo(db.products,{
    foreignKey: 'product_id',
    as: 'product'
})
module.exports = db    

