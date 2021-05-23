const express = require('express')
const route = express()
const Movie = require('../model/BollyhubSchema')

route.post('/',async (req,res)=>{
     var FilterMovie = []
     const result = await Movie.find({})
      try{
            result.map(item=>{
                 if(item.name.toLowerCase().includes(req.body.search.toLowerCase())){
                      FilterMovie.push(item)
                 }
            })
          // retu rn res.json({name:result,movie:req.body.search})
                return res.json(FilterMovie)
      }catch(err){
          console.log(err)
      }
})
module.exports = route