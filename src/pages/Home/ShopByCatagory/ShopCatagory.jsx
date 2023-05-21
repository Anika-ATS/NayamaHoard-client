import  { useEffect, useState } from 'react';
import CtagoryCard from './CtagoryCard';
const ShopCatagory = () => {
    const [ToyData, setToyData]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/toys")
        // fetch("https://bongo-chef-new-server-anika-ats.vercel.app/chefData")
            .then(res=>res.json())
            .then(data=>setToyData(data))
            
            .catch(error=>console.log(error))

     },[])



    return (
        <div>
            <h1 className='py-10 text-center text-purple-800 text-bold text-4xl hover:opacity-75'>Shop Catagory</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
            {
                  ToyData.map(toys=><CtagoryCard
                    key={toys.id}
                    toys={toys}
                  ></CtagoryCard>)
                      
                      

                  
               
               }
            </div>
            
        </div>
    );
};

export default ShopCatagory;