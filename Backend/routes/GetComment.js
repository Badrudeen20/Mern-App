const express = require('express')
const route = express.Router()
const CommenSchema = require('../model/CommentSchema')

route.post('/',(req,res)=>{
     CommenSchema.find({'postId':req.body.id})
     .populate('Movie')
     .exec((err,comment)=>{
       if(err) throw err
         res.json(comment)
     })  
      
}) 
module.exports = route