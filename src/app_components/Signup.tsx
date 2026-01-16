import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import {Button} from '../ui/button'
import { useNavigate } from "react-router-dom";

export const SignUp = ()=>{
  const [email,setEmail] = useState();
  const [password,setPassword] = useState(); 
  const [username,setUsername] = useState();
  const navigate = useNavigate();

  const handleEmailValue =(e: React.ChangeEvent<HTMLInputElement>)=>{
    setEmail(e.target.value)
  }
  const handlePassValue =(e: React.ChangeEvent<HTMLInputElement>)=>{
    setPassword(e.target.value)
  }
  const handleUsernameValue=(e: React.ChangeEvent<HTMLInputElement>)=>{
    setUsername(e.target.value)
  }
  const navigateToSignin=()=>{
    navigate('/signin')
  }

  const handleSignUp =async ()=>{
    try{
 const userSignUp = await axios.post("http://localhost:3000/user/signup",{
      email,
      username,
      password
    })
    if (!userSignUp.data){
      console.log("failed to signup")
    }else{
      console.log(userSignUp.data)
      
  navigateToSignin();
    }
    }catch(err){
      console.log(err)
    }
   
  }
  return(<div className="flex items-center justify-center min-h-screen">
    <div className="w-120 shadow-lg rounded-lg px-10 py-10 flex flex-col gap-5 bg-linear-to-b from-[#FFFFFF] to-[#E5EAF1]">
      <div className="text-center w-full"><p className="text-4xl text-[] font-bold">Welcome to <span className="bg-gradient-to-b from-[#4A44DA] from-50% to-[#FFFFFF] to-100% inline-block text-transparent bg-clip-text">BrainStash</span></p>
    <p className="text-gray-400 font-medium">To access your second brain,create an account or</p><span className="text-[#4A44DA] font-medium"><Link to="/signin">signin</Link></span></div>
    <div className="flex flex-col gap-2"><Label htmlFor="Username">Username</Label>
     <Input value={username} onChange={handleUsernameValue} placeholder="Enter username" /></div>
    <div className="flex flex-col gap-2"><Label htmlFor="Username">Email</Label>
     <Input value={email} onChange={handleEmailValue} placeholder="Enter email" /></div>
     <div className="flex flex-col gap-2"> <Label htmlFor="Username">Set Password</Label>
     <Input value={password} onChange={handlePassValue}  placeholder="Enter Password" /></div>
     <Button children="SignUp" onClick={handleSignUp}/></div>
     
    
     
  </div>)
}