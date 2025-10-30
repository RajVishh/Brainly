import axios from "axios";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Plus, Share2,Trash2 } from 'lucide-react';
import { useEffect } from "react";
import { AddContentDialog } from "./AddContentDialog";

export const RightPanel = () => {
  const handleClick = () => {
    console.log("button clicked");
  };

  const CardShareHandler =()=>{
    console.log("card share clicked")
  }

  const CardDeleteHandler =()=>{
    console.log("card delete clicked")
  }

  const getCards =async()=>{
    const response = await axios.get("http://localhost:3000/:UserId/brain")
    console.log(response)
  }
  useEffect(()=>{
    getCards()
  },[])
  return (
    <div className="py-5 px-10 flex flex-col gap-10 min-h-screen ">
        
      <div className="flex gap-5 w-full justify-between">
        <div className="font-bold text-2xl"><p>All Contents</p></div>
        <div className="flex gap-5">
          <AddContentDialog/>
        <Button
        startIcon={<Share2 size={20}/>}
          variant="secondary"
          size="md"
          children="Share"
          onClick={handleClick}
        /></div>
        
      </div>
      <div>
        <Card
        onShare={CardShareHandler}
        onDelete={CardDeleteHandler}
        firstRightIcon={<Share2 color="gray" size={15}/>}
        secondRightIcon={<Trash2 color="gray" size={15}/>}
          title="something"
          body="something something something"
          date="15-12-2025"
          tags={[]}
        />
      </div>
    </div>
  );
};
