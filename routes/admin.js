const Router =require("express")
const adminRouter=Router()
const {adminModel, courseModel}=require("../db")
const jwt=require("jsonwebtoken")
const { adminMiddleware } = require("../middleware/admin")
const JWT_ADMIN_PASSWORD=require(("../config"))

adminRouter.post("/signup",async function(req,res){
    const {email,password,firstName,lastName}=req.body;
        //adding zod validation
        //hash the password
        try{
        await adminModel.create({
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

adminRouter.post("/signin",async function(req,res){

    const {email,password}=req.body;

    const admin=await adminModel.findOne({
        email:email,
        password:password
    })

    if(admin){
        const token=jwt.sign({
            id:admin._id
        },JWT_ADMIN_PASSWORD)

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

adminRouter.post("/course",adminMiddleware,async function(req,res){
    const adminId=req.userId;

    const {title,description,imageUrl,price}=req.body;

    const course=await courseModel.create({
        title:title,
        description:description,
        imageUrl:imageUrl,
        price:price,
        creatorId:adminId
    })

    res.json({
        message:"course created",
        courseId:course._id
    })

})

adminRouter.put("/course",function(req,res){

    req.json({
        message:"signin endpoint"
    })

})

adminRouter.get("/course/bulk",function(req,res){

    res.json({
        message:"signup endpoint"
    })

})

module.exports={
    adminRouter:adminRouter
}

