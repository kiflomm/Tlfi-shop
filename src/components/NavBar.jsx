const NavBar = () => {
  return (
    <nav className="flex justify-between flex-wrap items-center bg-gray-900 p-4">
        <div className="text-blue-500 border-2 border-red-100 border-solid xsml:w-full xsml:text-center md:w-2/12">Logo</div>
        <div className="flex gap-4 border-2 border-red-700 border-solid xsml:w-full xsml:justify-between md:w-9/12 md:justify-end"> 
            <a href="#services" className=" text-gray-300  hover:bg-gray-700 font-medium rounded-md px-3 py-2">services</a>
            <a href="#home" className=" text-gray-300  hover:bg-gray-700 font-medium rounded-md px-3  py-2">home</a>
            <a href="#contact" className=" text-gray-300  hover:bg-gray-700 font-medium rounded-md px-3 py-2">contact</a>
            <a href="#about" className=" text-gray-300  hover:bg-gray-700 font-medium rounded-md px-3 py-2">About</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 px-3 rounded-md font-medium py-2">Contact</a>
        </div>
    </nav>
  )
} 
export default NavBar