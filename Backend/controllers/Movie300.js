const Movie = require('../model/BollyhubSchema')

module.exports = {
    movie300:async function(req,res){
        const startindex = (parseInt(req.query.page) - 1) * parseInt(req.query.limit) 
        const list = await Movie.find({quality:{$regex:"480p"}}).limit(parseInt(req.query.limit)).skip(startindex).exec()  
        const limit = await Movie.find({quality:{$regex:"480p"}}).countDocuments()
       
        try{
             console.log(list)
            return  res.json({data:list,limit:limit})
         }catch(err){
             console.log("fail")
        }
    }
}