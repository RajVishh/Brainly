import axios from "axios";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Plus, Share2,Trash2 } from 'lucide-react';
import { useEffect,useState } from "react";
import { AddContentDialog } from "./AddContentDialog";
import { useParams } from 'react-router-dom';

export const RightPanel = () => {
  const [card,setCards] = useState<any[]>([]);
  const { UserId } = useParams();
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
    
    const response = await axios.get(`http://localhost:3000/user/${UserId}/content`)
    setCards(response.data.brains)
    console.log("response",response.data.brains)
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
      <div className="flex flex-wrap gap-5">
       {card.map((content) => (<Card
        onShare={CardShareHandler}
        onDelete={CardDeleteHandler}
        firstRightIcon={<Share2 color="gray" size={15}/>}
        secondRightIcon={<Trash2 color="gray" size={15}/>}
          title={content.title}
          date="15-12-2025"
          tags={content.tag}
        /> ))}
      </div>
    </div>
  );
};
