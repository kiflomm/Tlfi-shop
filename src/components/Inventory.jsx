import {useState} from 'react'
const inventories =  [
    {image:{src:"https://i.postimg.cc/c1mjF3ch/Crowning-Kaba-Set.jpg",alt:"this is alt"},name:"ካባ",description:"this is description for the product it can span more than one line",price:"$3.24"},
    {image:{src:"https://i.postimg.cc/nchWgLRJ/Deep-Purple-Habesha-Dress.jpg",alt:""},name:"ዙርያ",description:"this is description for the product it can span more than one line",price:"$3.24"},
    {image:{src:"https://i.postimg.cc/nr0PM8Lg/Deep4.jpg",alt:"this is alt"},name:"መርዑት",description:"this is description for the product it can span more than one line",price:"$3.24"},
    {image:{src:"https://i.postimg.cc/XqVPVNn9/Meseret.jpg",alt:"this is alt"},name:"መስቀል",description:"this is description for the product it can span more than one line",price:"$3.24"},
    {image:{src:"https://i.postimg.cc/XqVPVNn9/Meseret.jpg",alt:"this is alt"},name:"ፃዕዳ",description:"this is description for the product it can span more than one line",price:"$3.24"},
    {image:{src:"https://i.postimg.cc/k5LgF6gc/clothe6.jpg",alt:"this is alt"},name:"ቢጫ",description:"this is description for the product it can span more than one line",price:"$3.24"}
] 
const Inventory = () => {
    return (
        <main className="mx-auto py-8 bg-gray-300">
            <div className='flex justify-end mr-4'><SearchBar className = "rounded-lg px-3 py-2"/></div>
            <div className="text-center">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Welcome to Our Store</h2>
                <p className="text-lg text-gray-600 mb-8">Discover the latest trends and shop your favorites.</p>
            </div>
            <div className="grid shadow-lg  grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mx-4">
                {inventories.map((inventory,index)=> ( 
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden" key={index}> 
                        <img src={inventory.image.src} alt={inventory.image.alt} className=" mx-auto py-4 w-[300px] h-[300px] object-fill"/> 
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{inventory.name}</h3>
                            <p className="text-gray-600">{inventory.description}</p>
                            <div className="flex items-center justify-between mt-4">
                                <span className="text-lg font-semibold text-blue-500">{inventory.price}</span>
                                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Add to cart</button>
                            </div>
                        </div>
                    </div>)
                )
                }
            </div> 
        </main>
    )
}
const SearchBar = ({className}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = (event) => {
      setSearchTerm(event.target.value)
    }  
    return ( 
        <input
          type="text"
          placeholder="Search Here"
          value={searchTerm}
          onChange={handleSearch}
          className={className}
        />  
    )
  }
  
export default Inventory;