import { useState } from "react";
const Links = [
    { name: "Home", link: "/" },
    { name: "Inventory", link: "/" },
    { name: "Contact", link: "/" },
    { name: "Help", link: "/" }
]
const NavBar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-gray-900 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <span className="text-3xl text-blue-500">
                        <ion-icon name="woman-outline" size="large"></ion-icon>
                    </span>
                    <span className="text-xl text-yellow-500 font-bold">ናትና ጥልፊ</span>
                </div>
                <div className="md:hidden">
                    <button className="text-blue-500" onClick={() => setOpen(!open)}>
                        <ion-icon name={open ? "close" : "menu"} size="large"></ion-icon>
                    </button>
                </div>
                <ul className={`md:flex flex-col md:flex-row md:items-center ${open ? 'block' : 'hidden'} md:w-auto`}>
                    {Links.map((link, index) => (
                        <li key={index} className="md:ml-6 mt-3 md:mt-0">
                            <a href={link.link} className="text-white hover:text-blue-500 duration-500 text-lg md:text-xl">{link.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;