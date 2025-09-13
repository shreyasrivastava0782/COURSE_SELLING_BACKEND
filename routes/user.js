// const express=require("express")
// const Router = express.Router;

const {Router}=require("express");
const userRouter =Router();
const {userModel}=require("../db")

userRouter.post("/signup",async function(req,res){

    const {email,password,firstName,lastName}=req.body;
        //adding zod validation
        //hash the password
        try{
        await userModel.create({
            email:email,
            password:password,
            firstName:firstName,
            lastName:lastName
        })
    
        res.json({
            message:"signup succeeded"
        })
    
    }catch(e){
        res.status(403).json({
            message:"error occurred"
        })
    }


})

userRouter.post("/signin",async function(req,res){

    const {email,password}=req.body;
    
        const user=await userModel.findOne({
            email:email,
            password:password
        })
    
        if(user){
            const token=jwt.sign({
                id:user._id
            },process.env.JWT_ADMIN_PASSWORD)
    
            res.json({
                token:token
            })
        }
        else{
            res.status(403).json({
                message:"Incorrect credentials"
            })
        }
    

})

userRouter.get("/purchases",function(req,res){
    res.json({
        message:"puchased endpoint"
    })

})

module.exports={
    userRouter:userRouter
}