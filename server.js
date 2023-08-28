const express=require("express");
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config();
// const User=require("./models/userModel");
const userRoute=require("./routes/userRoute");
const cors=require("cors");

app.use(cors());

app.use(express.json());

//agar error aaye mongodb connection mai tou server restart karna hai

mongoose.connect(process.env.URI).then(()=>{
    console.log("Connected Successfully");
    app.listen(4000,(err)=>{
        if (err) console.log(err);
        console.log("Running successfully at : ",process.env.PORT);
    });
}).catch((error)=>{
    console.log("error: ", error);
});

app.use(userRoute);