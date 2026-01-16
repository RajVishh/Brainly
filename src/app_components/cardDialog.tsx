import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function ShareDialog() {

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
