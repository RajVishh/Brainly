import {RightPanel} from "./components/rightPanel"
import {NavBar} from "./components/NavBar"


function App() {

 
  return (
    <>
    
    <div className="grid grid-cols-12 bg-[#F7F9FB]">
      <div className="col-span-2"><NavBar/></div>
      <div className="col-span-10 w-full"><RightPanel/></div>
    </div>
     
    </>
  )
}

export default App
