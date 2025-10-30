import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"
import { Button } from "@/ui/button";
import axios from 'axios';
import { useState } from "react";
export const SignIn = ()=>{
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();

    const handleEmailValue = (e) =>{
            setEmail(e.target.value)
        }

      const handlePasswordValue = (e) =>{
            setPassword(e.target.value)
        }

    const handleSignIn=async()=>{
        
        try{
            const loginUser = await axios.post("http://localhost:3000/user/signin",{
                email,password
            })
            if(!loginUser.data.UserInfo){
                console.log("login failed")
            }else{
                console.log(loginUser.data)
            }
        }catch(err){
            console.log(err)
        }
    }
  return(<div className="flex items-center justify-center min-h-screen">
    <div className="w-120 shadow-lg rounded-lg px-10 py-10 flex flex-col gap-5 bg-linear-to-b from-[#FFFFFF] to-[#E5EAF1]">
      <div className="text-center w-full"><p className="text-2xl font-bold">Login to access your <br /><span className="text-[#4A44DA]">second brain</span></p>
    </div>
    
    <div className="flex flex-col gap-2"><Label htmlFor="Username">Email</Label>
     <Input onChange={handleEmailValue} value={email} placeholder="Enter email" /></div>
     <div className="flex flex-col gap-2"> <Label htmlFor="Username">Password</Label>
     <Input onChange={handlePasswordValue} value={password} placeholder="Enter Password" /></div>
     <div className="flex justify-center items-center"><Button children="Login" onClick={handleSignIn}/></div>
     
     </div>
     
     
    
     
  </div>)
}