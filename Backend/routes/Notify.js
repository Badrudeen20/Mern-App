const express = require('express')
const route = express.Router()
const CommenSchema = require('../model/CommentSchema')

route.post('/',(req,res)=>{
      CommenSchema.updateMany({notify:false},{$set:{notify:true}},{multi:true}, 
        async   (err, result) => {
        if(result){
         const user = await CommenSchema.find({})
         try{
              return res.json({user:user})
          }catch(err){
               console.log(err)
          }
        }
      })
    
}) 


route.get('/', async (req,res)=>{
    const result = await CommenSchema.find({notify:false})
    try{
        return res.json({user:result,auth:true})
    }catch(err){
        console.log(err)
    }
}) 


module.exports = route