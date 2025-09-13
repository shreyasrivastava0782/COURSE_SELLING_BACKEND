const Router =require("express")
const adminRouter=Router()
const {adminModel, courseModel}=require("../db")
const jwt=require("jsonwebtoken")
const { adminMiddleware } = require("../middleware/admin")
const JWT_ADMIN_PASSWORD=process.env.JWT_ADMIN_PASSWORD
const JWT_USER_PASSWORD=process.env.JWT_USER_PASSWORD

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

adminRouter.put("/course",adminMiddleware,async function(req,res){
    const adminId=req.userId;

    const {title,description,imageUrl,price,courseId}=req.body;

    

    const course=await courseModel.updateOne({
        _id:courseId,
        creatorId:adminId
    },{
        title:title,
        description:description,
        imageUrl:imageUrl,
        price:price,
    })

    res.json({
        message:"course updated",
        courseId:course._id
    })

})

adminRouter.get("/course/bulk",adminMiddleware,async function(req,res){
    const adminId=req.userId;

    const courses=await courseModel.find({
        creatorId:adminId
    })

    res.json({
        message:"course updated",
        courses
    })

})

module.exports={
    adminRouter:adminRouter
}

