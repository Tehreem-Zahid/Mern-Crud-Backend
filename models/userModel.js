const mongoose=require("mongoose");

//creating schema
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    age:{
        type:Number,
    }
},
{timestamps:true});  //is se time bhi saath saath save hoga 

//creating model
//first argument model name and second argument is schema name
const User=mongoose.model('User',userSchema);
module.exports=User;