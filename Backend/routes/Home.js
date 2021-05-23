const express = require('express')
const route = express.Router()
//const Movie = require('../model/MovieSchema')
const Movie = require('../model/BollyhubSchema')

route.get('/', async (req,res)=>{
    
      const startindex = (parseInt(req.query.page) - 1) * parseInt(req.query.limit) 
      const list = await Movie.find({}).sort({_id:-1}).limit(parseInt(req.query.limit)).skip(startindex).exec()
      const limit = await Movie.find().countDocuments()
     
     try{
       // return res.json(list)
         return  res.json({data:list,limit:limit})
       }catch(err){
            console.log("fail")
       }
}) 
module.exports = route