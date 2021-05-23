//const Movie = require('../model/MovieSchema')
const Movie = require('../model/BollyhubSchema')

module.exports = {
    punjabi:async function(req,res){
        const startindex = (parseInt(req.query.page) - 1) * parseInt(req.query.limit) 
        const list = await Movie.find({category:"Punjabi"}).limit(parseInt(req.query.limit)).skip(startindex).exec()  
        const limit = await Movie.find({category:"Punjabi"}).countDocuments()
        
         try{
            return  res.json({data:list,limit:limit})
         }catch(err){
             console.log("fail")
        }
    }
}
