import NavBar from "./components/NavBar"
import MenuButton from './components/MenuButton'
import Inventory from './components/Inventory'
import LogIn from './components/LogIn'
import WelcomePage from './components/WelcomePage'
import SignUP from './components/SignUp'
import TeamMembers from "./components/TeamMembers"
import Footer from "./components/Footer"
import Contact from './components/Contact' 
const App = () => {
  return ( 
    <>
        <NavBar />
        <WelcomePage />
        <Inventory /> 
    <div className="grid grid-cols-1 md:grid-cols-2">
         <LogIn />
         <SignUP />
    </div>
   <TeamMembers />
   <Contact />
   <Footer/>
    </> 
  )
} 
export default App