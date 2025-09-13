const {Router}=require("express");
const courseRouter =Router();
const {courseModel, purchaseModel}=require("../db")
const {userMiddleware}=require("../middleware/user")


courseRouter.post("/purchase",userMiddleware,async function(req,res){
    //user can pay money
    const userId=req.userId;
    const courseId=req.body.courseId;

    await purchaseModel.create({
        userId,
        courseId
    })

    res.json({
        message:"you have successfully bought the course",
    })

})

courseRouter.get("/preview",async function(req,res){
    const courses=await courseModel.find({});

    res.json({
        message:courses
    })
})

module.exports={
    courseRouter:courseRouter
}