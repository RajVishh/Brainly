import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Brain } from "./app_components/Brain"
import { LandingPage } from "./app_components/LandingPage"
import {SignUp} from "./app_components/Signup"
import { SignIn } from "./app_components/SignIn"
import { SharedBrain } from "./app_components/sharedBrainWatch"


function App() {
 
  return (
    <>
    <BrowserRouter>
    <Routes><Route path='/' element={<LandingPage/>}/>
    <Route path='/:UserId/content' element={<Brain/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/content' element={<Brain/>}/>
    <Route path='/:randomLink/shared' element={<SharedBrain/>}/>
    <Route path='/signin' element={<SignIn/>}/>
    </Routes></BrowserRouter>
     
    </>
  )
}

export default App
