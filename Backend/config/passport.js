const LocalStrategy = require('passport-local').Strategy
const users = require('../model/AdminSchema')


module.exports = function(passport){
   passport.use(
       new LocalStrategy({usernameField:'email'},(email,password,done)=>{
           users.findOne({email:email})
           .then(user =>{
           
                if(!user) return done(null,false,{message:'Email is not register'})
               
                if(password === user.password){
                    return done(null,user,{message:"logged in successfully!"})
                }
                return done(null,false,{message:"Invalid Password!"})
            })
           .catch(err =>console.log(err))
       })
   )

 passport.serializeUser((user,done)=>{
     done(null,user._id)
 })    

 passport.deserializeUser((id,done)=>{
     users.findById(id,(err,user)=>{
         done(err,user)
     })
 })
    
}
