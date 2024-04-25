import NavBar from "./components/NavBar" 
import Inventory from './components/Inventory'
import LogIn from './components/LogIn'
import WelcomePage from './components/WelcomePage'
import SignUP from './components/SignUp'
import TeamMembers from "./components/TeamMembers"
import Footer from "./components/Footer"
import Contact from './components/Contact' 
import { Route,Routes } from 'react-router-dom';
const App = () => {
  return ( 
    <>
        <NavBar />
        <div className="main-content"> 
            <Routes>
                <Route path="/" Component={WelcomePage} />
                <Route path="/inventory" Component={Inventory} />
                <Route path="/teams" Component={TeamMembers} />
                <Route path="/contact" Component={Contact} /> 
                <Route path="/login" Component={LogIn} /> 
                <Route path="/team" Component={TeamMembers} /> 
            </Routes> 
        </div>
        {
        /* <WelcomePage />
        <Inventory /> 
        <div className="grid grid-cols-1 md:grid-cols-2">
         <LogIn />
         <SignUP />
        </div>
        <TeamMembers />
        <Contact /> */
        }
        <Footer/>
    </> 
  )
} 
export default App