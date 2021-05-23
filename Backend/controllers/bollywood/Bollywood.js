const Movie = require('../../model/BollyhubSchema')

module.exports = {
    bollywood:async function(req,res){
        const startindex = (parseInt(req.query.page) - 1) * parseInt(req.query.limit) 
        const list = await Movie.find({category:"Bollywood"}).limit(parseInt(req.query.limit)).skip(startindex).exec()  
        const limit = await Movie.find({category:"Bollywood"}).countDocuments()
        try{
            return  res.json({data:list,limit:limit})
         }catch(err){
             console.log("fail")
        }
    }
}
