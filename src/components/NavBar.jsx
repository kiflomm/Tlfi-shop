import { useState ,useRef,useEffect } from "react";
import { NavLink } from "react-router-dom";
const Links = [
    { name: "Home", link: "/" },
    { name: "Inventory", link: "/inventory" },
    { name: "Contact Us", link: "/contact" },
    { name: "Log in", link: "/login" },
    { name: 'Our Team', link: "/team"}
]
const NavBar = () => {  
    let initial=70; 
    const navBarRef = useRef()   
    const [open, setOpen] = useState(false); 
    return ( 
        <nav className="bg-gray-900 shadow-lg w-full" ref={navBarRef}>
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <span className="text-3xl text-blue-500">
                        <ion-icon name="woman-outline" size="large"></ion-icon>
                    </span>
                    <NavLink to={"/"} className="text-xl text-yellow-500 font-bold" >ናትና ጥልፊ</NavLink>
                </div>
                <div className="md:hidden">
                    <button className="text-blue-500" onClick={()=>setOpen(!open)}>
                        <ion-icon name={open ? "close" : "menu"} size="large"></ion-icon>
                    </button>
                </div>
                <ul className={`md:flex flex-col md:flex-row md:items-center ${open ? 'block' : 'hidden'} md:w-auto`}>
                    {Links.map((link, index) => (
                        <li key={index} className="md:ml-6 mt-3 md:mt-0">
                            <NavLink to={link.link} onClick={()=>setOpen(!open)} className="text-white hover:text-blue-500 duration-500 text-lg md:text-xl">{link.name}</NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav> 
    )
}

export default NavBar;