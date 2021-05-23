const express = require('express')
const route = express.Router()
const Movie = require('../model/BollyhubSchema')

route.post('/', async (req,res)=>{
      const list = await Movie.find({_id:req.body.id})  
       try{
           res.json(list)
       }catch(err){
            console.log("fail")
       }
}) 
module.exports = route