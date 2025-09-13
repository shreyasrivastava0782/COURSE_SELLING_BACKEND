const jwt=require("jsonwebtoken")



function userMiddleware(req,res,next){
    const token=req.headers.token;
    const decoded=jwt.verify(token,process.env.JWT_USER_PASSWORD)

    if(decoded){
        req.userId=dedcoded._id
        next()
    }
    else{
        res.status(403).json({
            message:"you are not signed in"
        })
    }
}

module.exporrts={
    userMiddleware:userMiddleware
}