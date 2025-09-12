require("dotenv").config()
console.log(process.env.MONGO_URL)
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



async function main(){
await mongoose.connect(process.env.MONGO_URL)
app.listen(3000);
}



main()
