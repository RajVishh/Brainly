import * as React from "react"
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Share2 } from "lucide-react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function ShareDialog() {
  const [enabled, setEnabled] = React.useState(true)
  const { UserId } = useParams();
  const [randomLink, setRandomLink] = useState<string | null>(null);
  const [isSharable, setIsSharable] = useState<boolean>(false);

  const handleLinkGeneration = async () =>{
    if(enabled){
      console.log(enabled)
      const shareableLink = await axios.post(`http://localhost:3000/user/${UserId}/brains/share`,{
        isSharable:true
       
      })
       setIsSharable(true);
      console.log(shareableLink.data.msg)
      console.log(shareableLink.data.link)
      setRandomLink(shareableLink.data.randomLink);
    }
    if(!enabled){
      console.log(enabled)
      const disableShareableLink = await axios.post(`http://localhost:3000/user/${UserId}/brains/share`,{
        isSharable:false
      })
       setIsSharable(false);
      console.log(disableShareableLink.data.msg)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button startIcon={<Share2 size={20}/>}  variant="primary" children="Share"/>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] bg-white">
  

        <div className="flex items-center justify-between py-4">
          <Label htmlFor="feature-toggle" className="text-sm font-medium">
            Share brain
          </Label>
          <Switch
            id="feature-toggle"
            checked={enabled}
            onCheckedChange={setEnabled}
          />
        </div><div className="">
          {isSharable ? (<div className="p-2 bg-gray-100 rounded"><p className="text-xs">http://localhost:5173/{randomLink}/shared</p></div>) : ( <div className="invisible"></div>)}
        </div>
        
        

        <DialogFooter>
          <Button onClick={handleLinkGeneration}>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
