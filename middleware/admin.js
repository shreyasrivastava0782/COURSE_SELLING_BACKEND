const jwt=require("jsonwebtoken")
const {JWT_ADMIN_PASSWORD}=require("./")


function adminMiddleware(req,res,next){
    const token=req.headers.token;
    const decoded=jwt.verify(token,JWT_ADMIN_PASSWORD)

    if(decoded){
        req.adminId=decoded._id
        next()
    }
    else{
        res.status(403).json({
            message:"you are not signed in"
        })
    }
}

module.exporrts={
    adminMiddleware:adminMiddleware
}