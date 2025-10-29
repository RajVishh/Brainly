import { UserModel } from "../db.js"
import bcrypt from "bcrypt";
import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
const SECRET = "SDSDSDSDDS";


export const userSignInMiddlware =async (req:Request,res:Response,next:NextFunction)=>{

    try{
       const { email, password } = req.body;
   if (!email || !password) {
      return res.status(401).json({msg:"email and password required"})
    }
    const User =await UserModel.findOne({email:email});
    console.log(User)
    if(!User || !User.password){
        return res.status(401).json({msg:"User not found"})

    }
    console.log(password)
    console.log( User.password)
    const isMatch = await bcrypt.compare(password, User.password)
    console.log(isMatch)
    
    if (isMatch) {
      (req as any).userInfo = User; 
      next(); 
    } else {
      return res.status(401).json({ message: "Invalid credentials" });
    }

}catch(err){
    console.log(err)
}}


export const createBrain = (req:Request,res:Response,next:NextFunction)=>{
     const cookie = req.cookies.cookie;

    const UserId = jwt.verify(cookie, SECRET);
    if (!UserId) {
      res.json({ msg: "signin first" });
    }
    req.UserId = UserId
    next();
}