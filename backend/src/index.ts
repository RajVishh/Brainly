import express from "express";
import { BrainModel, UserModel,LinkModel } from "./db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { createBrain, userSignInMiddlware } from "./middlewares/signinMiddleware.js";
import cookieParser from "cookie-parser";
import cors from 'cors';
import {randomHash} from "./utils/randomHash.ts"
const SECRET = "SDSDSDSDDS";

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use( cors({
    origin: "http://localhost:5173",
    credentials: true,
  }));

app.post("/user/signup", async (req, res) => {
  interface signup {
    email: string;
    username: string;
    password: string;
  }

  try {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const hashPass = async (password: string) => {
      const encryptedPass = await bcrypt.hash(password, 10);
      return encryptedPass;
    };
    const encyptedPass = await hashPass(password);

    const signupInfo: signup = {
      username: username,
      password: encyptedPass,
      email: email,
    };
    const userCreated = await UserModel.create(signupInfo);
    if (userCreated) {
      res.json({
        msg: "signed up",
      });
    } else {
      res.json({
        msg: "sign up failed",
      });
    }
  } catch (err) {
    res.json({
      error: err,
    });
  }
});

app.post("/user/signin", userSignInMiddlware, (req, res) => {
  const UserInfo = req.userInfo;
  const UserId = UserInfo._id.toString();
  const token = jwt.sign(UserId, SECRET);

  try{
    res.cookie("cookie", token);
    console.log(token);
   res.json({
    UserInfo:UserInfo
  });

  }catch(e){
    console.log(e)
  }
});

app.post("/user/content",createBrain, async (req, res) => {
  try {
    const link = req.body.link;
    const type = req.body.type;
    const tags = req.body.tags;
   const UserId = req.UserId
    const brainCreated = await BrainModel.create({ link, type, tags, UserId });
    if (brainCreated) {
      res.json({
        BrainCreated: brainCreated,
      });
    }
  } catch (err) {
    res.json({ error: err });
  }
});


app.get('/user/:UserId/content',async(req,res)=>{

  const FindByUserId = req.params.UserId
  const brains = await BrainModel.find({UserId:FindByUserId});
   if(brains){
     res.json({
        brains:brains
    })

   }else{
      res.json({msg:"failed to get brains"})
   }

})

app.delete('/user/brain',async(req,res)=>{
    const BrainId = req.body.BrainId
   const brainDeleted = await BrainModel.deleteOne({_id:BrainId})
   if(brainDeleted){
    res.json({
        msg:"brain deleted"
    })
   }else{
    res.json({msg:"failed to delete brain"})
   }

})

app.put('/user/brain',async(req,res)=>{
    const BrainId = req.body.BrainId
    const type = req.body.type
    const URL = req.body.URL
   const brainUpdated = await BrainModel.updateOne({_id:BrainId},{type:type,URL:URL})
   if(brainUpdated){
    res.json({
        msg:"brain updated"
    })
   }else{
    res.json({msg:"failed to update brain"})
   }

})

app.post('/user/:UserId/brains/share',userSignInMiddlware,async(req,res)=>{
 const userId = req.params.UserId;
  const isSharabel = req.body.isSharabel
  if(!isSharabel){
    const linkDeleted = await LinkModel.deleteOne({userId:userId});
    res.json({msg:"link deleted"})
  }
  else if (isSharabel){
    const randomLink = randomHash(30)
    const createLink = await LinkModel.create(
    { randomLink:randomLink, userId:userId },
  );
      res.json({
        msg:"link created"})
  }
});

app.get('/share/:randomlink',async(req,res)=>{
  const randomlink = req.params.randomlink
    const user = await LinkModel.findOne({randomLink:randomlink})
    if(!user){
      res.json({
      msg:"cannot find the link"})
    }else{
    const UserId = user.userId
    const brains = await BrainModel.find({UserId})
      res.json({
      msg:brains})
    }
    
  } 
);

app.listen(3000);
