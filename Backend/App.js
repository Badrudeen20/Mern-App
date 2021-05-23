const express = require('express')
const path = require('path')
const cors = require('cors')
require('dotenv').config()
const app = express()
const port = process.env.PORT
const url = process.env.DB_CON
const mongoose = require('mongoose')

const Login = require('./routes/AdminLogin')
const Home = require('./routes/Home')
const Upload = require('./routes/Upload')
const Update = require('./routes/Update')
const Delete = require('./routes/Delete')
const Logout = require('./routes/Logout')
const Category = require('./routes/Category')
const Download = require('./routes/Download')
const GetComment = require('./routes/GetComment')
const PostComment = require('./routes/PostComment')
const Search = require('./routes/Search')
const Notify = require('./routes/Notify')
const NotifyDelete = require('./routes/NotifyDelete')
const Recent = require('./routes/Recent')

const {ensureAuthenticated} = require('./middleware/Admin')
const flash = require('express-flash')
const session = require('express-session')
const SessionStore = require('connect-mongodb-session')(session)
const passport = require('passport')
require('./config/passport')(passport)




mongoose.connect(url,{
     useCreateIndex:true,
     useNewUrlParser:true,
     useFindAndModify:true,
     useUnifiedTopology:true
     },
     function(err){
       if(err) throw err
       console.log('connected!')
     })

 //session store
 
let Storesession = new SessionStore({
     uri:url,
     collection:"sessions"
 })
 


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended:false
}))

//session
app.use(session({
    secret:process.env.SECRET,
    resave:false,
    store:Storesession,
    saveUninitialized:false,
    cookie:{expires:1000 * 60 * 60 * 12} 
}))

//flash
app.use(flash())


//passport
app.use(passport.initialize())
app.use(passport.session())

//globel middleware
app.use((req,res,next)=>{
    res.locals.user = req.user
    next()
})



//build
app.use(express.static(path.join(__dirname, 'build')))
app.set("views","./view")
app.set("view engine","ejs")
app.get('/', function (req, res) {
     res.sendFile(path.join(__dirname, 'build', 'index.html'));
   })
 

//admin
app.use('/login',Login)
app.use('/deleteNotify',NotifyDelete)
app.use('/notify',ensureAuthenticated,Notify)
app.use('/logout',ensureAuthenticated,Logout)
app.use('/upload',ensureAuthenticated,Upload)
app.use('/update',ensureAuthenticated,Update)
app.use('/delete',ensureAuthenticated,Delete)

//links
app.use('/home',Home)
app.use('/category',Category)
app.use('/download',Download)

//comment
app.use('/Getcomment',GetComment)
app.use('/Postcomment',PostComment)

//search
app.use('/search',Search)
app.use('/recent',Recent)









app.listen(port,(req,res)=>{
     console.log(`localhost:${port}`)
})

