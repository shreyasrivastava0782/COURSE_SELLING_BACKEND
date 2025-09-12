const mongoose=require("mongoose")
// mongoose.connect("mongodb+srv://shreyasrivastava722_db_user:aeIDBPAHTnjsfpM0@cluster0.6hbraew.mongodb.net/course-selling-app")

const Schema=mongoose.Schema;
const ObjectId=mongoose.Types.ObjectId

const userSchema=new Schema({
    email:{type:String,unique:true},
    password:String,
    firstName:String,
    lastName:String
})

const adminSchema=new Schema({
    email:{type:String,unique:true},
    password:String,
    firstName:String,
    lastName:String
})

const courseSchema=new Schema({
    title:String,
    description:String,
    price:Number,
    imageUrl:String,
    creatorId:ObjectId
})

const purchaseSchema=new Schema({
    courseId:ObjectId,
    userId:ObjectId
})

const userModel = mongoose.model('users',userSchema);
const adminModel = mongoose.model('admin',adminSchema);
const courseModel = mongoose.model('course',courseSchema);
const purchaseModel = mongoose.model('purchase',purchaseSchema);


module.exports={
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}



