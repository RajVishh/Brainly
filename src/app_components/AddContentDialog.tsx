import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "../ui/button";
import { useState } from "react";
import axios from "axios";

export const AddContentDialog = ()=>{
    const [title,setTitle] = useState();
    const [link,setLink] = useState();

    const handleTitleOnChangeValue = (e) =>{
        setTitle(e.target.value)
    }

    const handleAddContentClick = async () =>{
        try {
            console.log(title)
            const addContent = await axios.post("http://localhost:3000/user/content",{
                title,link
            },{
        withCredentials: true // <--- THIS IS MANDATORY
    })
            
        }
        catch(e){
            console.log(e)
        }
        
    }

    return (<Dialog>
        <form>
            <DialogTrigger asChild>
                <Button variant="primary" children="Add Content"/>
            </DialogTrigger>
            <DialogContent className="bg-white">
                <DialogHeader>
                    <DialogTitle>Add content</DialogTitle>
                </DialogHeader>
                <div>
                    <div className="mb-5"><Label className="mb-2" htmlFor="title">Enter title</Label>
                        <Input type="text" onChange={handleTitleOnChangeValue} placeholder="title"/>
                    </div>
                    <div className="mb-5"><Label className="mb-2" htmlFor="title">Enter link</Label>
                        <Input type="text" placeholder="link"/>
                    </div>

                    <div className="flex justify-center items-center w-full"><Button variant={"secondary"} children="Add" onClick={handleAddContentClick}></Button></div>
                    
                </div>
            </DialogContent>
        </form>
    </Dialog>)
    
}