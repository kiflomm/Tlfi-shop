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
    
        <section>
        <div className={`h-96 bg-gray-500 text-white  py-20`}>
            <div className="px-0 md:px-4">
                <h1 className="text-center text-3xl md:text-4xl font-bold m-0 mb-4">Welcome to our E-commerce Store</h1>
                <p className="text-xl text-center md:text-lg m-0 mb-8">Find the best deals and shop with confidence!</p>   
            </div>
        </div>
        <div className="">
                    <div className="bg-gray-900 bg-opacity-75 p-4 rounded-md text-center font-semibold">
                    <p className="text-xl">{messages[currentMessageIndex]}</p>
                    </div>
        </div>
      </section> 
    
      
  );
};  
export default WelcomePage;