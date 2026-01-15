import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "../ui/button";
import { useState } from "react";
import { useCardsStore } from "../store/useCardStore.ts";
import { Plus } from "lucide-react";

export const AddContentDialog = ()=>{
    const [title,setTitle] = useState("");
    const [link,setLink] = useState("");
    const addCard = useCardsStore((state) => state.addCard);

    const handleTitleOnChangeValue = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setTitle(e.target.value)
        console.log(e.target.value)
    }

    const handleLinkOnChangeValue = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setLink(e.target.value)
        console.log(e.target.value)
    }

    const handAddClick = async () => {
       await addCard(title,link)
    }

    

    return (<Dialog>
        <form>
            <DialogTrigger asChild>
                <Button startIcon={<Plus size={20}/>} variant="primary" children="Add Content"/>
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
                        <Input type="text" onChange={handleLinkOnChangeValue} placeholder="link"/>
                    </div>

                    <div className="flex justify-center items-center w-full"><Button variant={"secondary"} children="Add" onClick={handAddClick}></Button></div>
                    
                </div>
            </DialogContent>
        </form>
    </Dialog>)
    
}