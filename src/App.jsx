import { useState } from "react"
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
    <div className="flex flex-col min-h-screen mx-1">
        <NavBar /> 
            <Routes>
                <Route path="/" element= <WelcomePage /> />
                <Route path="/inventory" element= <Inventory /> /> 
                <Route path="/contact" element= <Contact /> /> 
                <Route path="/login" element= <LogIn /> /> 
                <Route path="/team" element= <TeamMembers /> /> 
            </Routes>  
        <Footer className=""/>
    </div> 
  )
} 
export default App