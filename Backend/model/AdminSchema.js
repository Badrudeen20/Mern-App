const mongoose = require('mongoose')
const jwt  = require('jsonwebtoken')

const AdminSchema = new mongoose.Schema({
 	    	email:{type:String,required:true,unique:true},
         password:{type:String,require:true},
           tokens:[{
            token:{type:String,required:true}        
          }]
},{timestamps:true})

AdminSchema.methods.generateToken = async function(){
    try{
        const token = jwt.sign({_id:this._id},"mynameisbadrudeenansaryiamadeveloper")
        this.tokens = this.tokens.concat({token:token})
        await this.save()
        return token
    }catch(err){
        console.log(err)
    }
}


module.exports = mongoose.model("admin",AdminSchema)

