import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/ui/button";
import { SummarySkeleton } from "./summarySkeleton";
import { ScrollAreaDemo } from "./summaryScrollArea";



interface SummaryDialogProps{
    summary: string;
    onClick: ()=>void;
    videoId : string;
    isLoading: boolean;
}
export const SummaryDialog = ({summary, onClick, videoId, isLoading}:SummaryDialogProps)=>{

    

    return (<Dialog>
        
        
        <form>
            <DialogTrigger asChild>
                <Button className="mt-2" onClick={onClick} variant="tertiary" children="Summarise"/>
            </DialogTrigger>
            <DialogContent className="bg-white">
                <DialogHeader>
                    <div><img className = "rounded-md border-1 mt-5 border-[#C9C8C7]"
          src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
          alt="YouTube thumbnail"
          
        /></div>
                    <DialogTitle>Summary</DialogTitle>
                </DialogHeader>
                <div>{isLoading || !summary ? <SummarySkeleton /> : <ScrollAreaDemo summary={summary} />}</div>
            </DialogContent>
        </form>
    </Dialog>)
    
}