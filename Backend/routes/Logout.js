const express =  require('express')
const route = express.Router()

route.post('/',(req,res)=>{
      if(req.body.logout==='admin'){
       req.logOut()
       return res.redirect('/') 
      }
      return res.redirect('/') 
}) 
module.exports = route