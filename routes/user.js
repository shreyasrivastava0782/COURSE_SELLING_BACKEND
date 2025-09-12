// const express=require("express")
// const Router = express.Router;

const {Router}=require("express");
const userRouter =Router();
const {userModel}=require("../db")

userRouter.post("/signup",function(req,res){

    res.json({
        message:"signup endpoint"
    })

})

userRouter.post("/signin",function(req,res){

    req.json({
        message:"signin endpoint"
    })

})

userRouter.get("/purchases",function(req,res){
    res.json({
        message:"puchased endpoint"
    })

})

module.exports={
    userRouter:userRouter
}