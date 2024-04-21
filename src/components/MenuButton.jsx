import {useState} from 'react'

export default function MenuButton() {
    const [isOpen,setIsOpen] = useState(false)
  return (
   <div className="relative">
    <button onClick={()=>setIsOpen(!isOpen)} className='inline-flex items-center justify-center rounded-md w-10 h-10 text-center text-white bg-gray-700 m-3 border-2 border-red-900'>
        {isOpen? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="inline-block *:w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
            </svg>
        ):(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="inline-block w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        )}
    </button>
    {isOpen && (
    <div className='absolute right-0 p-4 rounded-md shadow-lg bg-gray-50'>
        <a href="#" className="flex items-center justify-center border-b-2 text-black h-8 hover:bg-gray-500 rounded-lg p-4">Home</a>
        <a href="#" className="flex items-center justify-center border-b-2 text-black h-8 hover:bg-gray-500 rounded-lg p-4">services</a>
        <a href="#" className="flex items-center justify-center border-b-2 text-black h-8 hover:bg-gray-500 rounded-lg p-4">contact</a>
        <a href="#" className="flex items-center justify-center border-b-2 text-black h-8 hover:bg-gray-500 rounded-lg p-4">About</a>
    </div>)}
    
   </div>
  )
}
