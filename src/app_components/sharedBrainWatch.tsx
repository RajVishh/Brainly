import {RightPanel} from "./rightPanel"
import {NavBar} from "./NavBar"


export const SharedBrain=()=> {
 
  return (
    <div className="grid grid-cols-12 bg-[#F7F9FB]">
      <div className="col-span-2"><NavBar/></div>
      <div className="col-span-10 w-full"><RightPanel Shared={true} /></div>
    </div>
    
  )
}

