const express = require('express')
const route = express.Router()
const DeletePost = require('../model/BollyhubSchema')

route.get('/:id', async (req,res)=>{
     const deleteItem = await DeletePost.findByIdAndDelete(req.params.id)
       try{
            if(deleteItem) return res.redirect('/')
        
       }catch(err){
            console.log(err)
       }
})

module.exports = route