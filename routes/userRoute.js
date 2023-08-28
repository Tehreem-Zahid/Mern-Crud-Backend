const express=require("express");
const mongoose=require("mongoose");
const User=require("../models/userModel");
const router=express.Router();
// const app=express();
// app.use(express.json());

//add user
router.post("/",async (req,res)=>{
    const name=req.body.name;
    const email=req.body.email;
    const age=req.body.age;
    const User=require("../models/userModel");
    try{
        const userAdded=await User.create({
            name:name,
            email:email,
            age:age,
        });
        res.status(201).json(userAdded);
    }
    catch(error){
        console.log(error);
        res.send(400).json("error: ",error.message);
    }


});

//get all users
router.get("/",async (req,res)=>
{
    try{
        const showAll=await User.find();
        res.status(201).json(showAll);
    }
    catch(error){
        console.log(error);
        res.send(500).json("error: ",error.message);
    }
    // res.send("Api running");
});

//get single user
router.get("/:id",async (req,res)=>
{
    const {id}=req.params;
    try{
        const singleUser=await User.findById({_id:id});
        res.status(201).json(singleUser);
    }
    catch(error){
        console.log(error);
        res.send(500).json("error: ",error.message);
    }
});

//delete user
router.delete("/:id",async (req,res)=>
{
    const {id}=req.params;
    try{
        const deleteUser=await User.findByIdAndDelete({_id:id});
        res.status(201).json(deleteUser);
    }
    catch(error){
        console.log(error);
        res.send(500).json("error: ",error.message);
    }
});


//put/patch
router.patch("/:id",async (req,res)=>
{
    const {id}=req.params;
    const name=req.body.name;
    const email=req.body.email;
    const age=req.body.age;
    try{
        const updateUser=await User.findByIdAndUpdate(id,req.body,{
            new:true,
        });
        res.status(201).json(updateUser);
    }
    catch(error){
        console.log(error);
        res.send(500).json("error: ",error.message);
    }
});



module.exports=router;