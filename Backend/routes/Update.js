const express = require('express')
const route = express.Router()
//const UpdateMovie = require('../model/MovieSchema')
const UpdateMovie = require('../model/BollyhubSchema')

route.get('/:id', async (req,res)=>{
      const list = await UpdateMovie.findById(req.params.id)  
       try{
         //  res.json(list)
         return res.render('Update',{data:list})
       }catch(err){
            console.log("fail")
       }
}) 



route.post('/',function(req,res){
  const {id,name,image,size,mb,category,rating,genres,director,cast,language,quality,story,screenshot,link4,link7,watchonline} = req.body
   UpdateMovie.findByIdAndUpdate(id,{
      name:name,
      image:image,
      pixel:size,
         mb:mb,
   category:category,
     rating:rating,
     genres:genres,
   director:director,
       cast:cast,
   language:language,
    quality:quality,
      story:story, 
 screenshot:screenshot,
      link4:link4,
      link7:link7,
watchonline:watchonline
   },function(err,result){
        if(err) throw err
       // return res.json({data:"updated"})
       return res.redirect('/')
   })
})

module.exports = route

module.exports = route