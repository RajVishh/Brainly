import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Brain } from "./app_components/Brain"
import { LandingPage } from "./app_components/LandingPage"
import {SignUp} from "./app_components/Signup"
import { SignIn } from "./app_components/SignIn"


function App() {
 
  return (
    <>
    <BrowserRouter>
    <Routes><Route path='/' element={<LandingPage/>}/>
    <Route path='/:UserId/content' element={<Brain/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/content' element={<Brain/>}/>
    <Route path='/signin' element={<SignIn/>}/>
    </Routes></BrowserRouter>
     
    </>
  )
}

export default App
