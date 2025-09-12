const {Router}=require("express");
const courseRouter =Router();
const {courseModel}=require("../db")

courseRouter.post("/purchase",function(req,res){
    //user can pay money
    res.json({
        message:"user pay the money for the course"
    })

})

courseRouter.get("/preview",function(req,res){
    res.json({
        message:"all courses visible here"
    })
})

module.exports={
    courseRouter:courseRouter
}