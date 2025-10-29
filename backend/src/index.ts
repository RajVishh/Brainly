import express from "express";
import { BrainModel, UserModel } from "./db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { createBrain, userSignInMiddlware } from "./middlewares/signinMiddleware.js";
import cookieParser from "cookie-parser";
const SECRET = "SDSDSDSDDS";

const app = express();
app.use(cookieParser());
app.use(express.json());

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
      console.log(userCreated);
      res.json({
        msg: "signed up",
      });
    } else {
      res.json({
        msg: "sign up failed",
      });
    }
  } catch (err) {
    console.log(err);
    res.json({
      error: err,
    });
  }
});

app.post("/user/signin", userSignInMiddlware, (req, res) => {
  console.log("in signin");
  const UserInfo = req.userInfo;
  console.log(UserInfo);
  const UserId = UserInfo._id.toString();
  console.log(UserId);
  const token = jwt.sign(UserId, SECRET);
  res.cookie("cookie", token);
  console.log(token);

  res.json({
    msg: `hello ${UserInfo.username}, you're signed in`,
  });
});

app.post("/user/brain",createBrain, async (req, res) => {
  try {
    const URL = req.body.URL;
    const title = req.body.title;
    const tags = req.body.tags;
   const UserId = req.UserId
    const brainCreated = await BrainModel.create({ URL, title, tags, UserId });
    if (brainCreated) {
      res.json({
        BrainCreated: brainCreated,
      });
    }
  } catch (err) {
    console.log(err);
    res.json({ error: err });
  }
});



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
    const title = req.body.title
    const URL = req.body.URL
   const brainUpdated = await BrainModel.updateOne({_id:BrainId},{title:title,URL:URL})
   if(brainUpdated){
    res.json({
        msg:"brain updated"
    })
   }else{
    res.json({msg:"failed to update brain"})
   }
    
})

app.listen(3000);
