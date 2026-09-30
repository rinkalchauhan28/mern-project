import userModel from "../model/user.model.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const register = async(req,res)=>{
    try{
    const {username,email,password} = req.body
        
    const isEmail = await userModel.findOne({email})
        if(isEmail){
            return res.status(404).json({message:"user found"})
        }
        const hash = await bcrypt.hash(password,10)
        const user = await userModel.create({username,email,password:hash})
        const token = jwt.sign({id:user._id},process.env.SECRATE,{expiresIn:'7d'})
        const accesstoken = jwt.sign({id:user._id},process.env.SECRATE,{expiresIn:'7m'})
        res.cookie('token',token)
        res.status(201).json({message:"user create",user,accesstoken})
    }catch(error){
        res.status(501).json({message:error.message})
    }
}

export const login = async(req,res)=>{
    try{
        const {email,password} = req.body
        const isEmail = await userModel.findOne({email})
        if(!isEmail){
            return res.status(404).json({message:"user not found"})
        }
        const isPass = await bcrypt.compare(password,isEmail.password)
        if(!isPass) {
            return res.status(401).json({message:"password wrong"})
        }
        const accesstoken = jwt.sign({id:isEmail._id},process.env.SECRATE,{expiresIn:'7m'})
        const token = jwt.sign({id:isEmail._id},process.env.SECRATE,{expiresIn:'7d'})
        res.cookie('token',token)
        res.status(201).json({message:"user login",success:true,user:{id:isEmail._id,email:isEmail.email,username:isEmail.username}})
    }catch(error){
        res.status(501).json({message:error.message})
    }
}