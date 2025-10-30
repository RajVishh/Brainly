import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom";
export const SignUp = ()=>{
  return(<div className="flex items-center justify-center min-h-screen">
    <div className="w-120 shadow-lg rounded-lg px-10 py-10 flex flex-col gap-5 bg-linear-to-b from-[#FFFFFF] to-[#E5EAF1]">
      <div className="text-center w-full"><p className="text-4xl text-[] font-bold">Welcome to <span className="bg-gradient-to-b from-[#4A44DA] from-50% to-[#FFFFFF] to-100% inline-block text-transparent bg-clip-text">Brainly</span></p>
    <p className="text-gray-400 font-medium">To access your second brain,create an account or</p><span className="text-[#4A44DA] font-medium"><Link to="/signin">signin</Link></span></div>
    
    <div className="flex flex-col gap-2"><Label htmlFor="Username">Set username</Label>
     <Input placeholder="Enter username" /></div>
    <div className="flex flex-col gap-2"><Label htmlFor="Username">Email</Label>
     <Input placeholder="Enter email" /></div>
     <div className="flex flex-col gap-2"> <Label htmlFor="Username">Set Password</Label>
     <Input placeholder="Enter Password" /></div></div>
     
    
     
  </div>)
}