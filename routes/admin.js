const Router =require("express")
const adminRouter=Router()
const {adminModel}=require("../db")

adminRouter.post("/signup",function(req,res){

    res.json({
        message:"signup endpoint"
    })

})

adminRouter.post("/signin",function(req,res){

    req.json({
        message:"signin endpoint"
    })

})

adminRouter.post("/",function(req,res){

    res.json({
        message:"signup endpoint"
    })

})

adminRouter.put("/",function(req,res){

    req.json({
        message:"signin endpoint"
    })

})

adminRouter.get("/bulk",function(req,res){

    res.json({
        message:"signup endpoint"
    })

})

module.exports={
    adminRouter:adminRouter
}

