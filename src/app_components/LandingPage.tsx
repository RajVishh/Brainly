import { ArrowRight } from 'lucide-react';
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
    const navigate = useNavigate();

    const navigateToSignup = ()=>{
        navigate('/signup')
    }
  return (
    <div className="flex flex-col justify-center items-center text-center min-h-screen gap-10">
        <div><div className="font-bold">
        <p className="text-4xl">
          Dive into your <br />{" "}
          <span className="text-8xl bg-gradient-to-b from-[#4A44DA] to-[#FFFFFF] inline-block text-transparent bg-clip-text">
            <p>second brain</p>
          </span>
        </p></div>
      
        
       
      </div>
      <div> <Button endIcon={<ArrowRight/>} children="Get started" onClick={navigateToSignup}/></div>   
      
    </div>
  );
};
