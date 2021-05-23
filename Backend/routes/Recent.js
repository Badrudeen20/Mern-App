const express = require('express')
const route = express.Router()
const Movie  =require('../model/BollyhubSchema')

route.get('/',async(req,res)=>{
    const list = await Movie.find({}).sort({_id:-1}).limit(5).exec()
    try{
        return res.json(list)
    }catch(err){
         console.log(err)
    }
})
module.exports = route