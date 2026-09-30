import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        index:true
    }
})

const userModel = mongoose.model('users_data',userSchema)
export default userModel

