import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button.tsx";
import { useState } from "react";
import { Plus } from "lucide-react";
import { useParams } from "react-router-dom";
import { useFilterStore } from "@/store/useFilterStore";

export const AddFilterButton = () => {
  const [filterName, setFilterName] = useState("");
  const { UserId } = useParams();
  const [isDialogOpen, setIsDialogOpen] = useState(true);

  const addFilters = useFilterStore((state) => state.addFilters);

  const handleAddFilterName = async () => {
    console.log("Adding filter:", filterName);
     console.log("userId in add filter button:", UserId);
    setIsDialogOpen(false);
    addFilters(filterName, UserId!);
  };

  // return (<Dialog>
  //     <form>
  //         <DialogTrigger asChild>
  //             <Button startIcon={<Plus size={20}/>} variant="fourth" children="Add filter"/>
  //         </DialogTrigger>
  //         <DialogContent className="bg-white">
  //             {isDialogOpen ? (<div><DialogHeader>
  //                 <DialogTitle>Enter filter name</DialogTitle>
  //             </DialogHeader>
  //             <div>
  //                 <div className="mb-5">
  //                     <Input type="text" onChange={(e)=>setFilterName(e.target.value)} placeholder="title"/>
  //                 </div>
  //                 <div className="flex justify-center items-center w-full"><Button variant={"secondary"} children="Add" onClick={handleAddFilterName}></Button></div>

  //             </div></div>): (<div className="hidden"></div>)}

  //         </DialogContent>
  //     </form>
  // </Dialog>

  return (
    <Dialog>
      <form>
        {isDialogOpen ? (
          <div>
            <DialogTrigger asChild>
              <Button
                startIcon={<Plus size={20} />}
                variant="tertiary"
                children="Add filter"
                onClick={() => setIsDialogOpen(true)}
              />
            </DialogTrigger>

            <DialogContent className="bg-white">
              <div>
                <DialogHeader>
                  <DialogTitle>Enter filter name</DialogTitle>
                </DialogHeader>
                <div>
                  <div className="mb-5">
                    <Input
                      className="mt-5"
                      type="text"
                      value={filterName}
                      onChange={(e) => setFilterName(e.target.value)}
                      placeholder="filter name"
                    />
                  </div>
                  <div className="flex justify-center items-center w-full">
                    <Button
                      variant={"secondary"}
                      children="Add"
                      onClick={handleAddFilterName}
                    ></Button>
                  </div>
                </div>
              </div>
            </DialogContent>
          </div>
        ) : (
          <DialogTrigger asChild>
              <Button
                startIcon={<Plus size={20} />}
                variant="fourth"
                children="Add filter"
                onClick={() => setIsDialogOpen(true)}
              />
            </DialogTrigger>
        )}
      </form>
    </Dialog>
  );
};
