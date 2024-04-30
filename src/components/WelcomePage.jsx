import { useState, useEffect } from 'react';
const WelcomePage = () => {  
const messages = [
    'Welcome to our online store!',
    'Find the best deals here!',
    'Shop now and save big!',
  ]; 
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0); 
  const updateMessage = () => {
    setCurrentMessageIndex((prevIndex) => (prevIndex === messages.length - 1 ? 0 : prevIndex + 1));
  }; 
  useEffect(() => {
    const intervalId = setInterval(updateMessage, 4000);
    return () => clearInterval(intervalId);
  }, []);

  return (   
        <section className='flex-1 bg-[url(https://i.postimg.cc/Kzfb9648/hero.jpg)] text-yellow-500  flex flex-col justify-between'>
                <div className=" flex-1 flex flex-col items-center justify-around px-0 md:px-4">
                    <h1 className="text-center  md:text-4xl font-bold text-3xl shadow-2xl shadow-gray-900 ">Welcome to our E-commerce Store</h1>
                    <p className="text-2xl text-center md:text-lg m-0 mb-8 text-white bg-red-500 bg-opacity-20 p-4 w-full font-semibold">Find the best deals and shop with confidence!</p>   
                </div> 
                <div className="flex-1">
                    
                </div>
                <div className="flex-1 flex items-center justify-center text-center text-white font-semibold">
                    <p className="text-2xl  bg-red-500 bg-opacity-40 p-4 w-full ">{messages[currentMessageIndex]}</p>
                </div> 
        </section>   
  );
};  
export default WelcomePage;