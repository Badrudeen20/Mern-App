const express = require('express')
const route = express.Router()
const CommentShema = require('../model/CommentSchema')

route.post('/', async(req,res)=>{
    const result = await  CommentShema.findByIdAndDelete(req.body.id)
    try{
        return res.json({id:result})
    }catch(err){
        console.log(err)
    }
})
module.exports = route