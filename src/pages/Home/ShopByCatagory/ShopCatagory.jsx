import  { useEffect, useState } from 'react';
import CtagoryCard from './CtagoryCard';
const ShopCatagory = () => {
    const [ToyData, setToyData]=useState([]);
  
    useEffect(()=>{
        fetch("http://localhost:5000/toy")
      
            .then(res=>res.json())
            .then(data=>setToyData(data))
            
            .catch(error=>console.log(error))

     },[])


    return (
        <div>
            
           
            <h1 className='mt-12 py-10 text-center text-purple-800 text-bold text-4xl hover:opacity-75 hover:bg-base-800  mb-12'>All SubCategories Product</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12'>
            {
                  ToyData.map(toy=><CtagoryCard
                    key={toy.id}
                    toy={toy}
               
                    
                  ></CtagoryCard>)
              
               }
            </div>
            
        </div>
    );
};

export default ShopCatagory;