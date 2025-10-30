import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "../ui/button";

export const AddContentDialog = ()=>{

    const handleAddContentClick = () =>{
        console.log("add content clicked")
    }

    const handleAdd = () =>{
        console.log("add clicked")
    }

    return (<Dialog>
        <form>
            <DialogTrigger asChild>
                <Button variant="primary" children="Add Content" onClick={handleAddContentClick}/>
            </DialogTrigger>
            <DialogContent className="bg-white">
                <DialogHeader>
                    <DialogTitle>Add content</DialogTitle>
                </DialogHeader>
                <div>
                    <div className="mb-5"><Label className="mb-2" htmlFor="title">Enter title</Label>
                        <Input type="text" placeholder="title"/>
                    </div>
                    <div className="mb-5"><Label className="mb-2" htmlFor="title">Enter link</Label>
                        <Input type="text" placeholder="link"/>
                    </div>

                    <div className="flex justify-center items-center w-full"><Button variant={"secondary"} children="Add" onClick={handleAdd}></Button></div>
                    
                </div>
            </DialogContent>
        </form>
    </Dialog>)
    
}