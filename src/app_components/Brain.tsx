import {RightPanel} from "./rightPanel"
import {NavBar} from "./NavBar"
import axios from 'axios';
import{useParams} from 'react-router-dom'


export const Brain=()=> {
 
  return (
    <div className="grid grid-cols-12 bg-[#F7F9FB]">
      <div className="col-span-2"><NavBar/></div>
      <div className="col-span-10 w-full"><RightPanel/></div>
    </div>
    
  )
}

