const express = require('express')
const route = express.Router()
const passport = require('passport')
const {ensureAuthenticated} = require('../middleware/Auth')

route.get('/',ensureAuthenticated,(req,res)=>{
   res.render('Login')
  
})

route.post('/',(req,res,next)=>{
 const {email,password} = req.body
if(email===""|| password==="")  {
    req.flash("error","fill the field!")
    return res.redirect('/login')
}

passport.authenticate('local',{
    successRedirect:'/',
    failureRedirect:'/login',
    failureFlash:true
})(req,res,next)

}) 




module.exports = route