const express = require('express')
const route = express.Router()
const UploadSchema = require('../model/BollyhubSchema')

route.get('/',(req,res)=>{  
     //  res.json({Auth:true})
     res.render('Upload')
  })

route.post('/', async (req,res)=>{  

     const upload = await new UploadSchema({
          name:req.body.name,
          image:req.body.image,
             mb:req.body.mb,
       category:req.body.category,
         rating:req.body.rating,
         genres:req.body.genres,
       director:req.body.director,
           cast:req.body.cast,
       language:req.body.language,
        quality:req.body.quality,
          story:req.body.story,
     screenshot:req.body.screenshot,
    watchonline:req.body.watchonline,
          link7:req.body.link7,
          link4:req.body.link4,

     })

     try{
          upload.save(function(err,data){
             // return res.json({data:"uploaded"})
             return res.redirect('/')
          })
     }catch(err){
          console.log(err)
     } 
})






module.exports = route