const express=require("express")
const app=express()
const jwt=require("jsonwebtoken")
const mongoose=require("mongoose")
const {userRouter} =require("./routes/user")
const {courseRouter}=require("./routes/course")
const {adminRouter}=require("./routes/admin")


app.use("/api/v1/user",userRouter)
app.use("/api/v1/course",courseRouter)
app.use("/api/v1/admin",adminRouter)

function userMiddleware(){

}


async function main(){
await mongoose.connect("mongodb+srv://shreyasrivastava722_db_user:aeIDBPAHTnjsfpM0@cluster0.6hbraew.mongodb.net/course-selling-app")
app.listen(3000);
}



main()
