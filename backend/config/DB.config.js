import mongoose from "mongoose";

export const connect = async ()=>{
    try {
        await mongoose.connect(process.env.DBSTRING)
        console.log("db connected")
    } catch (error) {
        console.log(error)
    }
}
